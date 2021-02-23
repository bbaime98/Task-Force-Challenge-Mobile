import initState from '../store/initialState';
import * as ACTION_TYPES from '../actions/actionTypes';

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_TASKS_SUCCESS:
      return {
        ...state,
        availableTasks: action.payload,
      };
    case ACTION_TYPES.GET_TASKS_SUCCESS:
      return {
        ...state,
        getTasksError: action.payload,
      };
    case ACTION_TYPES.DELETE_TASK:
      return {
        ...state,
        deleted: action.payload,
      };
    case ACTION_TYPES.EDIT_TASK:
      return {
        ...state,
         availableTasks: action.payload,
      };
    case ACTION_TYPES.SET_TASK_TO_DONE:
      return {
        ...state,
         availableTasks: action.payload,
      };
    case ACTION_TYPES.RESET_DELETE_STATE:
      return {
        ...state,
        deleted: action.payload,
      };
    case ACTION_TYPES.RESET_EDIT_STATE:
      return {
        ...state,
        edited: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;
