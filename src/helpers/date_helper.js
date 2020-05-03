function getTimeAtoms(stringDate) {
  const splittedDate = stringDate.split(':');
  return {
    hours: splittedDate[0],
    minutes: splittedDate[1]
  };
}

export function getFormattedTime(date = new Date()) {
  const timeAtoms = getTimeAtoms(date.toTimeString());
  return `${timeAtoms.hours}:${timeAtoms.minutes}`;
}

export function hydrateDate(date, time) {
  const timeAtoms = getTimeAtoms(time);
  date.setHours(timeAtoms.hours, timeAtoms.minutes);
  return date;
}
