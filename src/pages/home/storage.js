const REMINDERS_KEY = '@reminders';

export function getReminders() {
  const savedReminders = JSON.parse(localStorage.getItem(REMINDERS_KEY));
  const remindersWithDate = savedReminders.map((reminder) => ({
    ...reminder,
    date: new Date(reminder.date)
  }));
  console.log('get', remindersWithDate.length);
  return remindersWithDate || [];
}

export function updateReminders(reminders) {
  console.log('length', reminders.length);
  const remindersWithTimestamp = reminders.map((reminder) => ({
    ...reminder,
    date: reminder.date.getTime()
  }));
  const stringifiedReminders = JSON.stringify(remindersWithTimestamp);
  localStorage.setItem(REMINDERS_KEY, stringifiedReminders);
}

export function addReminder(reminder) {
  const reminders = getReminders();
  const updatedReminders = [...reminders, reminder];
  updateReminders(updatedReminders);
}
