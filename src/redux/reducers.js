import { combineReducers } from 'redux';

import calendarData from '../pages/calendar/duck';

export default combineReducers({
  calendar: calendarData
});
