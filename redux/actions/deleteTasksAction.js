import {AsyncStorage} from "react-native"
import * as ACTION_TYPES from "./actionTypes"
import {KEY} from "../../utils/key"

export const deleteTasksAction = (taskId) => async (dispatch, getState) => {
  try {
    const {tasks} = getState()
    const {availableTasks} = tasks

    const newTasksArray = availableTasks.filter((task) => task.id !== taskId)
    await AsyncStorage.setItem(KEY, JSON.stringify(newTasksArray))
    dispatch({
      type: ACTION_TYPES.DELETE_TASK,
      payload: true,
    })
  } catch (error) {
    console.log("___DELETE TASK ERROR__", error)
  }
}

export const reseDeleteAction = () => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.RESET_DELETE_STATE,
    payload: false,
  })
}
