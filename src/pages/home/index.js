import React from 'react';
import moment from 'moment';

import MyCalendar from '../../components/calendar';
import RemindersList from '../../components/remindersList';
import { Containers } from './styles';

const HomePage = () => {
  const reminders = [
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: 'Aniversário Yasmin'
    },
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: 'Aniversário Daniel'
    }
  ];

  return (
    <>
      <h1>Calendar and reminders</h1>
      <Containers.Root>
        <Containers.Calendar>
          <MyCalendar reminders={reminders} />
        </Containers.Calendar>
        <Containers.Reminders>
          <RemindersList reminders={reminders} />
        </Containers.Reminders>
      </Containers.Root>
    </>
  );
};

export default HomePage;
