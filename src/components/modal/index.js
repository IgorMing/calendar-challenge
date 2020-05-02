import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { CloseButton, Form } from './styles';
import MyDatePicker from '../datePicker';

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
  function _onSave() {
    onSave();
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
      <Form>
        <div className="field">
          <label htmlFor="text-reminder">Description</label>
          <textarea
            id="text-reminder"
            rows={2}
            cols={50}
            maxLength={30}
            onChange={(e) => setText(e.target.value)}
          >
            {text}
          </textarea>
        </div>
        <div className="field">
          <label>Day</label>
          <MyDatePicker selected={date} onChange={setDate} />
        </div>
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
