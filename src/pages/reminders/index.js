import React from 'react';
import { useSelector } from 'react-redux';

const Reminders = () => {
  const { reminders } = useSelector((store) => store.calendar);
  return (
    <ul>
      {reminders.map((reminder) => (
        <li key={reminder}>{reminder}</li>
      ))}
    </ul>
  );
};

export default Reminders;
