import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MyCalendar from '../../components/calendar';
import RemindersList from '../../components/remindersList';
import Wrapper, { Containers, AddButton } from './styles';
import MyModal from '../../components/modal';
import { addReminder } from './duck';

const HomePage = () => {
  const { reminders } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState();

  function _closeModal() {
    setIsOpen(false);
  }

  function _openModal() {
    setIsOpen(true);
  }

  function _addReminder(reminder) {
    console.log('add reminder', reminder);
    dispatch(addReminder(reminder));
    setSelectedReminder();
  }

  function _onSelectReminder(reminder) {
    console.log('on select', reminder);
    setSelectedReminder(reminder);
    _openModal();
  }

  return (
    <Wrapper>
      <h1>Calendar and reminders</h1>
      <AddButton onClick={_openModal}>Add Reminder</AddButton>
      <Containers.Root>
        <Containers.Calendar>
          <MyCalendar
            reminders={reminders}
            onSelectReminder={_onSelectReminder}
          />
        </Containers.Calendar>
        <Containers.Reminders>
          <RemindersList reminders={reminders} />
        </Containers.Reminders>
      </Containers.Root>
      <MyModal
        onSave={_addReminder}
        isOpen={modalIsOpen}
        closeModal={_closeModal}
        reminder={selectedReminder}
      />
    </Wrapper>
  );
};

export default HomePage;
