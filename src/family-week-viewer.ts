import { LitElement, html, TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import { styles } from './styles';
import {
  HomeAssistant,
  FamilyWeekViewerConfig,
  CalendarEvent,
} from './types';
import {
  getWeekDays,
  getWeekStart,
  getWeekEnd,
  getDutchDayName,
  isToday,
  formatTime,
  eventFallsOnDate,
} from './utils/date-utils';

class FamilyWeekViewer extends LitElement {
  // Do NOT use @property for hass to avoid constant re-renders
  private _hass?: HomeAssistant;

  @state() private _events: CalendarEvent[] = [];
  @state() private _loading = true;
  @state() private _error?: string;

  private _config?: FamilyWeekViewerConfig;
  private _lastFetch = 0;
  private _fetchInterval = 5 * 60 * 1000; // 5 minutes

  static styles = styles;

  // Called when the card is configured
  setConfig(config: FamilyWeekViewerConfig): void {
    if (!config.entity) {
      throw new Error('Je moet een calendar entity opgeven (bijv. calendar.gezin)');
    }
    this._config = config;
  }

  // Called frequently when Home Assistant state changes
  set hass(hass: HomeAssistant) {
    const oldHass = this._hass;
    this._hass = hass;

    // Fetch events on first load or if enough time has passed
    const now = Date.now();
    if (!oldHass || now - this._lastFetch > this._fetchInterval) {
      this._fetchEvents();
    }
  }

  get hass(): HomeAssistant | undefined {
    return this._hass;
  }

  // Required: return card height for masonry view (1 unit = 50px)
  getCardSize(): number {
    return 4;
  }

  // Grid options for sections view (12-column grid)
  public getGridOptions() {
    const options = {
      columns: 12,       // Full width (12 columns = full section width)
      min_columns: 6,    // Minimum half width
      rows: 4,           // Default 4 rows
      min_rows: 2,       // Minimum 2 rows
    };
    console.log('getGridOptions called, returning:', options);
    return options;
  }

  // Fetch calendar events from Home Assistant using REST API
  private async _fetchEvents(): Promise<void> {
    if (!this._hass || !this._config) return;

    this._loading = true;
    this._error = undefined;
    this._lastFetch = Date.now();

    try {
      const start = getWeekStart();
      const end = getWeekEnd();

      // Format dates as ISO strings for the REST API
      const startStr = start.toISOString();
      const endStr = end.toISOString();

      // Use REST API: GET /api/calendars/{entity}?start={iso}&end={iso}
      const path = `calendars/${this._config.entity}?start=${startStr}&end=${endStr}`;
      const response = await this._hass.callApi<CalendarEvent[]>('GET', path);

      this._events = response || [];
      console.log('Calendar events fetched:', this._events);
    } catch (err) {
      console.error('Error fetching calendar events:', err);
      this._error = 'Kon agenda niet laden';
      this._events = [];
    } finally {
      this._loading = false;
    }
  }

  // Get events for a specific day
  private _getEventsForDay(date: Date): CalendarEvent[] {
    return this._events
      .filter((event) => eventFallsOnDate(event, date))
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
  }

  // Render the card
  render(): TemplateResult {
    if (!this._config) {
      return html`<ha-card><div class="error">Geen configuratie</div></ha-card>`;
    }

    if (this._loading && this._events.length === 0) {
      return html`
        <ha-card>
          <div class="loading">Agenda laden...</div>
        </ha-card>
      `;
    }

    if (this._error) {
      return html`
        <ha-card>
          <div class="error">${this._error}</div>
        </ha-card>
      `;
    }

    const weekDays = getWeekDays();

    return html`
      <ha-card>
        ${this._config.title
          ? html`<div class="card-header">${this._config.title}</div>`
          : ''}
        <div class="week-container">
          ${weekDays.map((day) => this._renderDay(day))}
        </div>
      </ha-card>
    `;
  }

  // Render a single day column
  private _renderDay(date: Date): TemplateResult {
    const dayEvents = this._getEventsForDay(date);
    const today = isToday(date);

    return html`
      <div class="day-column ${today ? 'today' : ''}">
        <div class="day-header">
          <span class="day-name">${getDutchDayName(date)}</span>
          <span class="day-number">${date.getDate()}</span>
        </div>
        <div class="events-list">
          ${dayEvents.length > 0
            ? dayEvents.map((event) => this._renderEvent(event))
            : html`<div class="no-events">-</div>`}
        </div>
      </div>
    `;
  }

  // Render a single event
  private _renderEvent(event: CalendarEvent): TemplateResult {
    const time = formatTime(event.start);

    return html`
      <div class="event-item">
        ${time ? html`<span class="event-time">${time}</span>` : ''}
        <span class="event-title">${event.summary}</span>
      </div>
    `;
  }
}

// Version info
const CARD_VERSION = '1.0.8';

// Log version to console
console.info(
  `%c FAMILY-WEEK-VIEWER %c v${CARD_VERSION} `,
  'color: white; background: #3498db; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;',
  'color: #3498db; background: #ecf0f1; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;'
);

// Register the custom element
customElements.define('family-week-viewer', FamilyWeekViewer);

// Register for the card picker in Lovelace UI
(window as unknown as { customCards: unknown[] }).customCards =
  (window as unknown as { customCards: unknown[] }).customCards || [];
(window as unknown as { customCards: unknown[] }).customCards.push({
  type: 'family-week-viewer',
  name: 'Family Week Viewer',
  description: 'Een weekoverzicht van je gezinsagenda',
  preview: false,
});

// Export for type checking
export { FamilyWeekViewer };
