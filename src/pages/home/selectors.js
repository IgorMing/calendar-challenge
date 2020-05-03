export function orderedReminders(state) {
  const { reminders } = state.calendar;

  if (!reminders.length) {
    return reminders;
  }

  return state.calendar.reminders.sort((a, b) => a.date - b.date);
}
