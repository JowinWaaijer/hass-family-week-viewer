// Home Assistant types
export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: { entity_id: string | string[] },
    returnResponse?: boolean
  ): Promise<unknown>;
  callApi<T>(method: string, path: string): Promise<T>;
  language: string;
  config: {
    time_zone: string;
  };
  auth?: {
    data?: {
      access_token?: string;
    };
  };
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
}

// Card configuration
export interface FamilyWeekViewerConfig {
  type: string;
  entity: string;
  title?: string;
  // Event type filters (all default to true)
  show_all_day_events?: boolean;
  show_multi_day_events?: boolean;
  show_timed_events?: boolean;
}

// Calendar event from Home Assistant REST API
export interface CalendarEvent {
  summary: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
  description?: string;
  location?: string;
}

// Internal structure for grouped events
export interface DayEvents {
  date: Date;
  dayName: string;
  dayNumber: number;
  isToday: boolean;
  events: CalendarEvent[];
}
