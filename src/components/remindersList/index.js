import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Reminder from '../reminder';

const RemindersList = ({ onDelete, onEdit, reminders }) => {
  return (
    <Container>
      <div>
        <h2>Reminders</h2>
      </div>
      {reminders.map((reminder) => (
        <Reminder
          onDelete={() => onDelete(reminder.id)}
          onEdit={() => onEdit(reminder)}
          key={reminder.id}
          {...reminder}
        />
      ))}
    </Container>
  );
};

RemindersList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  reminders: PropTypes.array
};

RemindersList.defaultProps = {
  reminders: []
};

export default RemindersList;
