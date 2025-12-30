# Family Week Viewer

A custom Home Assistant Lovelace card designed for busy families.

## Current Status: v1.0.7 TESTING

**Last session:** 2025-12-30
**Current version:** 1.0.7
**Version in HA config:** `?v=8`

Testing in v1.0.7:
- `public getGridOptions()` met `rows: 4` en console logging
- CSS vereenvoudigd (geen height/min-height conflicten)

Fixed in v1.0.5:
- Events load correctly (switched from WebSocket to REST API)
- Added `getGridOptions()` for sections view support

## Target Audience

A busy family of 4 seeking to simplify their daily life using Home Assistant. The card should be:
- **Quick to read** - No time for complex interfaces
- **Family-friendly** - Usable by all family members, including children
- **Actionable** - Show what matters most at a glance

## Project Goals

- Create intuitive, beautiful Lovelace custom cards
- Optimize for family scheduling and coordination
- Minimize cognitive load for daily planning

## Design Principles

1. **Simplicity First** - If it takes more than 2 seconds to understand, it's too complex
2. **Visual Clarity** - Use colors, icons, and spacing effectively
3. **Mobile-Friendly** - Works great on wall tablets and phones
4. **Responsive** - Adapts to different screen sizes

## Technical Stack

- LitElement (standard for Home Assistant custom cards)
- TypeScript
- Rollup for bundling

## Installation

### Manual Installation

1. Build the card:
   ```bash
   npm install
   npm run build
   ```

2. Copy `dist/family-week-viewer.js` to your Home Assistant config folder:
   ```
   /config/www/family-week-viewer.js
   ```

3. Add the resource in Home Assistant:
   - Go to **Settings > Dashboards > Resources** (click the three dots menu)
   - Click **Add Resource**
   - URL: `/local/family-week-viewer.js`
   - Type: **JavaScript Module**

4. Add the card to your dashboard:
   ```yaml
   type: custom:family-week-viewer
   entity: calendar.gezin
   title: Onze Week
   ```

## Configuration

| Option | Required | Default | Description |
|--------|----------|---------|-------------|
| `entity` | Yes | - | Your calendar entity ID (e.g., `calendar.gezin`) |
| `title` | No | - | Optional title above the week view |

## Development

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Watch mode (auto-rebuild on changes)
npm run dev
```

### Project Structure

```
src/
├── family-week-viewer.ts  # Main card component
├── styles.ts              # CSS styles
├── types.ts               # TypeScript interfaces
└── utils/
    └── date-utils.ts      # Date helper functions
```

---

## Decision Log

This section tracks key design and technical decisions for future reference.

| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-12-29 | Project initialized | Starting fresh Lovelace card project for family scheduling |
| 2025-12-29 | Use dayjs for dates | Lightweight (2KB), better than native Date API for week calculations |
| 2025-12-29 | Dutch day names only | Target audience is Dutch family, no need for i18n complexity |
| 2025-12-29 | 5-minute refresh interval | Balance between freshness and API calls |
| 2025-12-29 | Use hass.callService for calendar events | Standard HA approach with returnResponse flag |

---

## Session Notes

### Session 1 (2025-12-29)
**What we did:**
- Created complete project structure from scratch
- Built custom Lovelace card with LitElement + TypeScript
- Implemented week view matching the mockup (7 columns, Dutch day names)
- Calendar entity configured: `calendar.gezin`
- Successfully compiled to `dist/family-week-viewer.js`

**Mockup reference:** `/Users/jowinwaaijer/Downloads/1000011806.jpg`

**Troubleshooting solved:**
1. **"bare specifier" error for lit** → Fixed by bundling lit into the card (added `lit` as dependency, removed external in rollup config). Card went from 14KB to 30KB.
2. **Browser cache issues** → Add version parameter to URL: `?v=4`
3. **service_validation_error for calendar.get_events** → `hass.callService` doesn't support `return_response`. Must use WebSocket API instead.
4. **HTTP 404 for REST API** → REST endpoint format unclear. Switched to WebSocket: `hass.connection.sendMessagePromise({ type: 'calendar/list_events', ... })`

**Technical learnings:**
- HA custom cards must bundle their dependencies (lit, etc.) - HA doesn't expose them globally
- Use `hass.connection.sendMessagePromise()` for WebSocket calls that return data
- WebSocket message type for calendar: `calendar/list_events` with `entity_id`, `start_date`, `end_date`
- Always add `?v=X` to resource URL to bust cache when updating
- Console version logging helps verify correct version is loaded

### Session 2 (2025-12-30)
**What we did:**
- Fixed events not showing: switched from WebSocket to REST API (`hass.callApi`)
- Fixed event data structure: `start`/`end` are now objects with `dateTime` or `date` properties
- Added `getGridOptions()` method for sections view (12-column grid)
- Removed fixed `min-width` constraints for better responsiveness
- Updated to version 1.0.5

**Root cause analysis:**
1. **Events issue**: Was using wrong API (`calendar/list_events` via WebSocket). Correct API is REST: `GET /api/calendars/{entity}?start={iso}&end={iso}`
2. **Response format**: Events have `start.dateTime`/`start.date` (not just `start` as string)

**Sources used:**
- [Calendar Card Pro](https://github.com/alexpfau/calendar-card-pro) - reference implementation
- [HA Custom Card Docs](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/) - getGridOptions

### Next Steps (for next session)
**Test v1.0.5:**
1. Copy `dist/family-week-viewer.js` to Home Assistant `/config/www/`
2. Update resource URL to `?v=7`
3. Refresh dashboard, check console for "Calendar events fetched: [...]"
4. Verify events display correctly

**If it works, consider:**
- Multiple calendar support (color-coded)
- Week navigation (previous/next week)
- Card editor for visual configuration
- Click on event for details popup

### Files to copy to Home Assistant
```
dist/family-week-viewer.js → /config/www/family-week-viewer.js
```

### Card configuration for dashboard
```yaml
type: custom:family-week-viewer
entity: calendar.gezin
title: Onze Week
```

### Version History
| Version | Config URL | Changes |
|---------|------------|---------|
| 1.0.0 | ?v=1 | Initial build (broken - lit not bundled) |
| 1.0.1 | ?v=2 | Fixed lit bundling |
| 1.0.2 | ?v=3 | Attempted callService fix |
| 1.0.3 | ?v=3 | Attempted REST API fix |
| 1.0.4 | ?v=4 | WebSocket API + console version logging |
| 1.0.5 | ?v=7 | Fixed: REST API (callApi), getGridOptions(), responsive CSS |
| 1.0.7 | ?v=8 | Grid debug: public getGridOptions(), console logging, simplified CSS |

