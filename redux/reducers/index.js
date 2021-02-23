import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import newTaskReducer from './newTaskReducer';

export default combineReducers({
  tasks: tasksReducer,
  newTask: newTaskReducer,
});
