import { combineReducers } from 'redux';
import getTasksReducer from './getTasksReducer';
import newTaskReducer from './newTaskReducer';

export default combineReducers({
  tasks: getTasksReducer,
  newTask: newTaskReducer,
});
