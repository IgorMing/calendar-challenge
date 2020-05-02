import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const RemindersList = ({ reminders }) => {
  return (
    <Container>
      <div>
        <h2>Reminders</h2>
      </div>
      <div>
        <ul>
          {reminders.map((reminder) => (
            <li key={reminder.title}>{reminder.title}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

RemindersList.propTypes = {
  reminders: PropTypes.array
};

RemindersList.defaultProps = {
  reminders: []
};

export default RemindersList;
