import { combineReducers } from 'redux';

import calendarData from '../pages/home/duck';

export default combineReducers({
  calendar: calendarData
});
