export function orderedReminders(state) {
  return state.calendar.reminders.sort((a, b) => a.date - b.date);
}
