import {AsyncStorage} from "react-native"
import * as ACTION_TYPES from "./actionTypes"
import {KEY} from "../../utils/key"
import { customDate } from '../../utils/dateHandler'

export const setTaskToDoneAction = (taskId, active) => async (dispatch, getState) => {
  try {
    const {tasks} = getState()
    const {availableTasks} = tasks

    const index = availableTasks.findIndex((task) => task.id === taskId);
    availableTasks[index].modified =  `${customDate[1]} ${customDate[2]}`;
    availableTasks[index].active = active;
    await AsyncStorage.setItem(KEY, JSON.stringify(availableTasks))

    return dispatch({
      type: ACTION_TYPES.SET_TASK_TO_DONE,
      payload: availableTasks,
    })
  } catch (error) {
    console.log("___SET DONE TASK ERROR__", error)
  }
}
