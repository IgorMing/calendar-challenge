import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Reminder from '../reminder';

const RemindersList = ({ reminders }) => {
  return (
    <Container>
      <div>
        <h2>Reminders</h2>
      </div>
      {reminders.map((reminder) => (
        <Reminder key={reminder.id} {...reminder} />
      ))}
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
