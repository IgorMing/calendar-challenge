import React from 'react';
import PropTypes from 'prop-types';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './override_style.css';

import { hydrateDataToCalendar, hydrateCalendarToModel } from './helper';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ reminders, onSelectReminder }) => {
  function customizeReminderStyle(event) {
    return {
      style: {
        backgroundColor: event.color
      }
    };
  }

  return (
    <Calendar
      onSelectEvent={(data) => onSelectReminder(hydrateCalendarToModel(data))}
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={hydrateDataToCalendar(reminders)}
      style={{ height: '70vh' }}
      eventPropGetter={customizeReminderStyle}
    />
  );
};

MyCalendar.propTypes = {
  reminders: PropTypes.array,
  onSelectReminder: PropTypes.func
};

MyCalendar.defaultProps = {
  reminders: [],
  onSelectReminder: () => {}
};

export default MyCalendar;
