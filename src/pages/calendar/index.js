import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const HomePage = () => {
  const events = [
    {
      start: moment().toDate(),
      end: moment().add(1, 'days').toDate(),
      title: 'Some title'
    }
  ];

  return (
    <div className="App">
      <h1>Calendar and reminders</h1>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: '80vh' }}
      />
    </div>
  );
};

export default HomePage;
