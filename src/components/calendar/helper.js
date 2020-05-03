export function hydrateDataToCalendar(reminders) {
  return reminders.map(({ date, ...rest }) => ({
    start: date,
    end: date,
    ...rest
  }));
}

export function hydrateCalendarToModel({ start, ...rest }) {
  delete rest.end;
  return {
    date: start,
    ...rest
  };
}
