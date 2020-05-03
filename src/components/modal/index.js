import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import TimePicker from 'react-time-picker';
import { v4 as uuidv4 } from 'uuid';

import { CloseButton, Form } from './styles';
import MyDatePicker from '../datePicker';
import { getFormattedTime, hydrateDate } from '../../helpers/date_helper';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: 400,
    height: 500,
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white'
  }
};

const MyModal = ({ onSave, isOpen, closeModal, reminder }) => {
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(getFormattedTime());
  const [loadedData, setLoadedData] = useState(false);

  // Checking if it's not an empty object
  if (Object.keys(reminder).length && !loadedData) {
    setTitle(reminder.title);
    setCity(reminder.city);
    setDate(reminder.date);
    setTime(getFormattedTime(reminder.date));
    setLoadedData(true);
  }

  function _clearFields() {
    setTitle('');
    setCity('');
    setDate(new Date());
    setTime(getFormattedTime());
  }

  function _onSave(e) {
    e.preventDefault();
    console.log({ title, city, date, time });
    const hydratedDate = hydrateDate(date, time);
    const id = reminder.id || uuidv4();

    onSave({ date: hydratedDate, title, id, city });
    _clearFields();
    closeModal();
  }

  function _closeModal() {
    _clearFields();
    closeModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={_closeModal}
      style={customStyles}
      contentLabel="Remider Modal"
    >
      <CloseButton onClick={closeModal} />
      <h2>Add a new reminder</h2>
      <Form onSubmit={_onSave}>
        <div className="field">
          <label htmlFor="text-reminder">Title</label>
          <textarea
            id="text-reminder"
            rows={3}
            cols={50}
            maxLength={30}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="field">
          <label>City</label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className="field">
          <label>Day</label>
          <MyDatePicker selected={date} onChange={setDate} />
        </div>
        <div className="field">
          <label>Time</label>
          <TimePicker value={time} disableClock onChange={setTime} />
        </div>
        <input type="submit" value="Create" />
      </Form>
    </Modal>
  );
};

MyModal.propTypes = {
  reminder: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onSave: PropTypes.func,
  closeModal: PropTypes.func
};

MyModal.defaultProps = {
  reminder: {}
};

export default MyModal;
