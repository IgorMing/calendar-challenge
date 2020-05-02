import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Calendar from './pages/calendar';
import Reminders from './pages/reminders';

function App() {
  return (
    <Provider store={store}>
      <Calendar />
      <Reminders />
    </Provider>
  );
}

export default App;
