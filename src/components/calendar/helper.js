export function hydrateDataToCalendar(reminders) {
  return reminders.map(({ date, id, title }) => ({
    start: date,
    end: date,
    title,
    id
  }));
}
