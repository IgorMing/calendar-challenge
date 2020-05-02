import React, { useState } from 'react';

import MyCalendar from '../../components/calendar';
import RemindersList from '../../components/remindersList';
import { Containers } from './styles';
import MyModal from '../../components/modal';

const HomePage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const reminders = [
    {
      start: new Date(),
      end: new Date(),
      title: 'Aniversário Yasmin'
    },
    {
      start: new Date(),
      end: new Date(),
      title: 'Aniversário Daniel'
    }
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <h1>Calendar and reminders</h1>
      <button onClick={openModal}>Add Reminder</button>
      <Containers.Root>
        <Containers.Calendar>
          <MyCalendar reminders={reminders} />
        </Containers.Calendar>
        <Containers.Reminders>
          <RemindersList reminders={reminders} />
        </Containers.Reminders>
      </Containers.Root>
      <MyModal isOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};

export default HomePage;
