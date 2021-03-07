import initState from '../store/initialState';
import * as ACTION_TYPES from '../actions/actionTypes';

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    case ACTION_TYPES.CREATE_TASK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTION_TYPES.RESET_NEW_TASK_STATE:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;
