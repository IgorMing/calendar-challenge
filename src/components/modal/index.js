import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import TimePicker from 'react-time-picker';
import { v4 as uuidv4 } from 'uuid';

import { CloseButton, Form } from './styles';
import MyDatePicker from '../datePicker';
import { getFormatedTime, hydrateDate } from './helpers';

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
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(getFormatedTime());

  function _onSave(e) {
    e.preventDefault();
    const hydratedDate = hydrateDate(date, time);

    onSave({ date: hydratedDate, title: text, id: uuidv4() });
    setText('');
    setDate(new Date());
    setTime(getFormatedTime());
    closeModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
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
            onChange={(e) => setText(e.target.value)}
            value={text}
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
