# Claude Memory - Family Week Viewer

Dit bestand bevat technische informatie en sessienotities voor Claude.

## Project Overview

**Repository:** https://github.com/JowinWaaijer/hass-family-week-viewer
**Current version:** 1.1.0
**Version in HA config:** `?v=10`

### Technical Stack
- LitElement (standard for Home Assistant custom cards)
- TypeScript
- Rollup for bundling
- dayjs for date handling

### Project Structure
```
src/
├── family-week-viewer.ts  # Main card component
├── styles.ts              # CSS styles
├── types.ts               # TypeScript interfaces
└── utils/
    └── date-utils.ts      # Date helper functions + event type detection
```

## Key Technical Decisions

### Calendar API
- **Correct API:** `hass.callApi('GET', 'calendars/{entity}?start={iso}&end={iso}')`
- **Wrong (doesn't work):** WebSocket `calendar/list_events`
- **Response format:** Events have `start.dateTime`/`start.date` (object, not string)

### Grid Options for Sections View
- Implement `public getGridOptions()` method
- Return `{ columns: 12, min_columns: 6, rows: 4, min_rows: 2 }`
- CSS must have `height: 100%` on `:host` and `ha-card`
- Use `flex` layout with `overflow: auto` on content container

### Event Types
- **All-day:** Uses `start.date` field, spans exactly 1 day
- **Multi-day:** Spans multiple days (end - start > 1 day for date fields)
- **Timed:** Uses `start.dateTime` field, same day

## Configuration Interface

```typescript
interface FamilyWeekViewerConfig {
  type: string;
  entity: string;
  title?: string;
  show_all_day_events?: boolean;   // default: true
  show_multi_day_events?: boolean; // default: true
  show_timed_events?: boolean;     // default: true
}
```

## Version History

| Version | HA Cache | Changes |
|---------|----------|---------|
| 1.0.0 | ?v=1 | Initial build (broken - lit not bundled) |
| 1.0.1 | ?v=2 | Fixed lit bundling |
| 1.0.2 | ?v=3 | Attempted callService fix |
| 1.0.3 | ?v=3 | Attempted REST API fix |
| 1.0.4 | ?v=4 | WebSocket API + console version logging |
| 1.0.5 | ?v=7 | Fixed: REST API (callApi), getGridOptions(), responsive CSS |
| 1.0.7 | ?v=8 | Grid debug: public getGridOptions(), console logging |
| 1.0.8 | ?v=9 | Grid fix: height 100%, flex layout, overflow handling |
| 1.1.0 | ?v=10 | Feature: Event type filter |

## Session Notes

### Session 1 (2025-12-29)
**What we did:**
- Created complete project structure from scratch
- Built custom Lovelace card with LitElement + TypeScript
- Implemented week view matching the mockup (7 columns, Dutch day names)
- Calendar entity configured: `calendar.gezin`
- Successfully compiled to `dist/family-week-viewer.js`

**Troubleshooting solved:**
1. "bare specifier" error for lit → Fixed by bundling lit into the card
2. Browser cache issues → Add version parameter to URL: `?v=X`
3. service_validation_error for calendar.get_events → Use REST API instead
4. HTTP 404 for REST API → Correct endpoint: `calendars/{entity}?start=&end=`

**Technical learnings:**
- HA custom cards must bundle their dependencies (lit, etc.)
- Use `hass.callApi()` for REST calls that return data
- REST endpoint: `GET /api/calendars/{entity}?start={iso}&end={iso}`
- Always add `?v=X` to resource URL to bust cache

### Session 2 (2025-12-30)
**What we did:**

**v1.0.5 - Events fix:**
- Fixed events not showing: switched from WebSocket to REST API
- Fixed event data structure: `start`/`end` are objects with `dateTime` or `date`
- Added `getGridOptions()` method for sections view (12-column grid)

**v1.0.6 & v1.0.7 - Grid debugging:**
- Investigated why `getGridOptions()` wasn't being respected
- Made method `public`, added console logging
- Simplified CSS (removed conflicting height/min-height)

**v1.0.8 - Grid fix (WORKING):**
- Added `height: 100%` to `:host` and `ha-card` so card fills grid cell
- Added `display: flex` + `flex-direction: column` to `ha-card`
- Added `flex: 1`, `min-height: 0`, `overflow: auto` to `.week-container`

**v1.1.0 - Event type filter:**
- Added `show_all_day_events`, `show_multi_day_events`, `show_timed_events` config
- Added event type detection functions in date-utils.ts
- Implemented filtering logic in `_shouldShowEvent()` method

**GitHub setup:**
- Installed GitHub CLI (`brew install gh`)
- Created repo and tagged releases

## Feature Roadmap

### Implemented
- [x] Week view with 7 columns (Monday-Sunday, Dutch)
- [x] Calendar events from Home Assistant REST API
- [x] Today highlighting (blue column)
- [x] Sections view support with getGridOptions()
- [x] Event type filtering

### Planned
- [ ] Kindvriendelijke dag-symbolen (🌙🦕🐕⚡🐦🪚☀️)
- [ ] Multiple calendar support (color-coded)
- [ ] Week navigation (previous/next week)
- [ ] Card editor for visual configuration

## Useful Commands

```bash
# Build
npm run build

# Watch mode
npm run dev

# Deploy to HA
cp dist/family-week-viewer.js /path/to/homeassistant/config/www/
# Then update ?v=X in HA resource URL
```

## Sources
- [Calendar Card Pro](https://github.com/alexpfau/calendar-card-pro) - reference implementation
- [HA Custom Card Docs](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/)
