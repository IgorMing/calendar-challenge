import { getReminders, updateReminders, addReminder } from './storage';

// Actions
const ADD_REMINDER = 'CALENDAR/ADD_REMINDER';
const UPDATE_REMINDER = 'CALENDAR/UPDATE_REMINDER';

const INITIAL_STATE = {
  reminders: getReminders()
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_REMINDER: {
      addReminder(action.payload);
      return {
        ...state,
        reminders: [...state.reminders, action.payload]
      };
    }
    case UPDATE_REMINDER:
      updateReminders(action.payload);
      return {
        ...state,
        reminders: action.payload
      };
    default:
      return state;
  }
}

// Action Creators
export function saveReminder(reminder) {
  return (dispatch, getState) => {
    const { reminders } = getState().calendar;
    const reminderFound = reminders.find((each) => each.id === reminder.id);

    if (reminderFound) {
      const updatedReminders = reminders.map((currReminder) =>
        currReminder.id === reminder.id ? reminder : currReminder
      );
      dispatch({
        type: UPDATE_REMINDER,
        payload: updatedReminders
      });
    } else {
      dispatch({ type: ADD_REMINDER, payload: reminder });
    }
  };
}

export function deleteReminder(id) {
  return (dispatch, getState) => {
    const { reminders } = getState().calendar;
    const foundIndex = reminders.findIndex((reminder) => reminder.id === id);

    if (foundIndex !== -1) {
      reminders.splice(foundIndex, 1);
      const updatedReminders = [...reminders];

      dispatch({
        type: UPDATE_REMINDER,
        payload: updatedReminders
      });
    } else {
      console.error(`Id: "${id}" not found into reminders list`);
    }
  };
}
