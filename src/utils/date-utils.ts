import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(weekday);
dayjs.extend(isoWeek);

// Dutch day names (Monday = 0, Sunday = 6)
const DUTCH_DAYS = [
  'maandag',
  'dinsdag',
  'woensdag',
  'donderdag',
  'vrijdag',
  'zaterdag',
  'zondag',
];

/**
 * Get the start of the current week (Monday)
 */
export function getWeekStart(date: Date = new Date()): Date {
  return dayjs(date).isoWeekday(1).startOf('day').toDate();
}

/**
 * Get the end of the current week (Sunday 23:59:59)
 */
export function getWeekEnd(date: Date = new Date()): Date {
  return dayjs(date).isoWeekday(7).endOf('day').toDate();
}

/**
 * Get array of 7 dates for the current week (Monday to Sunday)
 */
export function getWeekDays(date: Date = new Date()): Date[] {
  const weekStart = dayjs(date).isoWeekday(1);
  return Array.from({ length: 7 }, (_, i) =>
    weekStart.add(i, 'day').toDate()
  );
}

/**
 * Get Dutch day name from date (0-indexed, Monday = 0)
 */
export function getDutchDayName(date: Date): string {
  const dayIndex = dayjs(date).isoWeekday() - 1; // isoWeekday: 1=Mon, 7=Sun
  return DUTCH_DAYS[dayIndex];
}

/**
 * Check if a date is today
 */
export function isToday(date: Date): boolean {
  return dayjs(date).isSame(dayjs(), 'day');
}

/**
 * Format time from calendar event start to HH:mm
 * Returns empty string for all-day events
 */
export function formatTime(start: { dateTime?: string; date?: string }): string {
  // All-day event uses date field, no time to show
  if (start.date) {
    return '';
  }
  // Timed event uses dateTime field
  if (start.dateTime) {
    const d = dayjs(start.dateTime);
    return d.format('HH:mm');
  }
  return '';
}

// Event type for filtering
export type EventType = 'all-day' | 'multi-day' | 'timed';

/**
 * Check if an event is an all-day event (single day, no specific time)
 */
export function isAllDayEvent(
  event: { start: { dateTime?: string; date?: string }; end: { dateTime?: string; date?: string } }
): boolean {
  // All-day events use the date field, not dateTime
  if (!event.start.date) {
    return false;
  }
  // Check if it spans only one day
  const startDate = dayjs(event.start.date);
  const endDate = dayjs(event.end.date);
  // All-day events have exclusive end date, so 1 day = end is start + 1
  return endDate.diff(startDate, 'day') === 1;
}

/**
 * Check if an event spans multiple days
 */
export function isMultiDayEvent(
  event: { start: { dateTime?: string; date?: string }; end: { dateTime?: string; date?: string } }
): boolean {
  const startStr = event.start.dateTime || event.start.date;
  const endStr = event.end.dateTime || event.end.date;

  if (!startStr || !endStr) {
    return false;
  }

  const startDate = dayjs(startStr);
  const endDate = dayjs(endStr);

  // For all-day events (date field), end is exclusive
  if (event.start.date && event.end.date) {
    return endDate.diff(startDate, 'day') > 1;
  }

  // For timed events, check if they span different days
  return !startDate.isSame(endDate, 'day');
}

/**
 * Check if an event has a specific time (not all-day)
 */
export function isTimedEvent(
  event: { start: { dateTime?: string; date?: string }; end: { dateTime?: string; date?: string } }
): boolean {
  // Timed events use dateTime field and don't span multiple days
  return !!event.start.dateTime && !isMultiDayEvent(event);
}

/**
 * Get the type of an event
 */
export function getEventType(
  event: { start: { dateTime?: string; date?: string }; end: { dateTime?: string; date?: string } }
): EventType {
  if (isMultiDayEvent(event)) {
    return 'multi-day';
  }
  if (isAllDayEvent(event)) {
    return 'all-day';
  }
  return 'timed';
}

/**
 * Check if an event falls on a specific date
 * Handles both timed events (dateTime) and all-day events (date)
 */
export function eventFallsOnDate(
  event: { start: { dateTime?: string; date?: string }; end: { dateTime?: string; date?: string } },
  date: Date
): boolean {
  // Get start and end strings from the event structure
  const startStr = event.start.dateTime || event.start.date;
  const endStr = event.end.dateTime || event.end.date;

  if (!startStr || !endStr) {
    return false;
  }

  const eventStart = dayjs(startStr);
  const eventEnd = dayjs(endStr);
  const targetDate = dayjs(date);

  // Event starts on this day
  if (eventStart.isSame(targetDate, 'day')) {
    return true;
  }

  // Multi-day event: check if target date is between start and end
  // For all-day events, end date is exclusive (e.g., Jan 1-3 means Jan 1 and Jan 2)
  if (eventStart.isBefore(targetDate, 'day')) {
    // For all-day events (using date field), end is exclusive
    if (event.end.date) {
      return eventEnd.isAfter(targetDate, 'day');
    }
    // For timed events, check if end is after start of target day
    return eventEnd.isAfter(targetDate.startOf('day'));
  }

  return false;
}
