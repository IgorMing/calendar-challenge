// Actions
const ADD_REMINDER = 'CALENDAR/ADD_REMINDER';

const INITIAL_STATE = {
  reminders: []
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_REMINDER:
      return {
        ...state,
        reminders: [...state.reminders, action.payload]
      };
    default:
      return state;
  }
}

// Action Creators
export function addReminder(reminder) {
  return {
    type: ADD_REMINDER,
    payload: reminder
  };
}
