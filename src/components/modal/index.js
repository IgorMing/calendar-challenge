import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import TimePicker from 'react-time-picker';
import { v4 as uuidv4 } from 'uuid';

import { CloseButton, Form } from './styles';
import MyDatePicker from '../datePicker';
import { getFormatedTime, hydrateDate } from '../../helpers/date_helper';

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

const MyModal = ({ onSave, isOpen, closeModal }) => {
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(getFormatedTime());

  function _clearFields() {
    setTitle('');
    setCity('');
    setDate(new Date());
    setTime(getFormatedTime());
  }

  function _onSave(e) {
    e.preventDefault();
    const hydratedDate = hydrateDate(date, time);

    onSave({ date: hydratedDate, title, id: uuidv4(), city });
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
  isOpen: PropTypes.bool.isRequired,
  onSave: PropTypes.func,
  closeModal: PropTypes.func
};

export default MyModal;
