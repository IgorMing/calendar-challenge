import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Calendar, RemindersList } from '../../components';
import Wrapper, { Containers } from './styles';
import MyModal from '../../components/modal';
import { deleteReminder, saveReminder } from './duck';
import { orderedReminders } from './selectors';

const HomePage = () => {
  const reminders = useSelector(orderedReminders);
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState();

  function _closeModal() {
    setIsOpen(false);
    setSelectedReminder();
  }

  function _openModal() {
    setIsOpen(true);
  }

  function _addReminder(reminder) {
    dispatch(saveReminder(reminder));
    setSelectedReminder();
  }

  function _onDelete(id) {
    dispatch(deleteReminder(id));
  }

  function _onSelectReminder(reminder) {
    setSelectedReminder(reminder);
    _openModal();
  }

  return (
    <Wrapper>
      <h1>Calendar and reminders</h1>
      <Button onClick={_openModal} title="Add reminder" />
      <Containers.Root>
        <Containers.Calendar>
          <Calendar
            reminders={reminders}
            onSelectReminder={_onSelectReminder}
          />
        </Containers.Calendar>
        <Containers.Reminders>
          <RemindersList
            reminders={reminders}
            onEdit={_onSelectReminder}
            onDelete={_onDelete}
          />
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
