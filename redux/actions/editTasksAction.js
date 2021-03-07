import {AsyncStorage} from "react-native"
import * as ACTION_TYPES from "./actionTypes"
import {KEY} from "../../utils/key"
import { customDate } from '../../utils/dateHandler'

export const editTaskAction = (taskData) => async (dispatch, getState) => {
  try {
    const {tasks} = getState()
    const {availableTasks} = tasks
    const index = availableTasks.findIndex((task) => task.id === taskData.id);
    availableTasks[index].modified =  `${customDate[1]} ${customDate[2]}`;
    availableTasks[index].title = taskData.title;
    availableTasks[index].description = taskData.description;
    availableTasks[index].priority = taskData.priority;
    availableTasks[index].image = taskData.image;
    await AsyncStorage.setItem(KEY, JSON.stringify(availableTasks))

    return dispatch({
      type: ACTION_TYPES.EDIT_TASK,
      payload: availableTasks,
    })
  } catch (error) {
    console.log("___EDIT TASK ERROR__", error)
  }
}
export const changeAllTasksStatusAction = () => async (dispatch, getState) => {
  try {
    const {tasks} = getState()
    const {availableTasks} = tasks
    availableTasks.forEach((task) => task.active = false);
    await AsyncStorage.setItem(KEY, JSON.stringify(availableTasks))

    return dispatch({
      type: ACTION_TYPES.CHANGE_ALL_TASKS_STATUS,
      payload: availableTasks,
    })
  } catch (error) {
    console.log("___CHANGE TASK STATUS  ERROR__", error)
  }
}

export const reseDeleteAction = () => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.RESET_EDIT_STATE,
    payload: false,
  })
}
