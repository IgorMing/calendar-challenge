import React from 'react';
import PropTypes from 'prop-types';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './override_style.css';
import { hydrateDataToCalendar } from './helper';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ reminders }) => {
  console.log({ reminders });
  return (
    <Calendar
      onSelectEvent={(a) => console.log('clicou', a)} // TODO use this to edit an event
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={hydrateDataToCalendar(reminders)}
      style={{ height: '80vh' }}
    />
  );
};

MyCalendar.propTypes = {
  reminders: PropTypes.array
};

MyCalendar.defaultProps = {
  reminders: []
};

export default MyCalendar;
