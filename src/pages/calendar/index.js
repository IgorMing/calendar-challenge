import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addReminder } from './duck';

const HomePage = () => {
  const INITIAL_VALUE = '';
  const [reminder, setReminder] = useState(INITIAL_VALUE);
  const dispatch = useDispatch();

  function _addReminder() {
    if (!reminder) {
      return;
    }

    dispatch(addReminder(reminder));
    setReminder(INITIAL_VALUE);
  }

  function _handleChange(e) {
    setReminder(e.target.value);
  }

  return (
    <div>
      <h1>Home page</h1>
      <input type="text" onChange={_handleChange} value={reminder} />
      <button onClick={_addReminder}>Add Reminder</button>
    </div>
  );
};

export default HomePage;
