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
    case ACTION_TYPES.RESET_DELETE_STATE:
      return {
        ...state,
        deleted: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;
