import { AsyncStorage } from "react-native";
import * as ACTION_TYPES from './actionTypes';
import { getTasksAction } from './getTasksAction'
import uuid from 'react-native-uuid';
import { KEY } from '../../utils/key'
import { customDate } from '../../utils/dateHandler'


export const createTaskAction = (taskData) => async (
    dispatch, getState
) => {
    try {
        let newTasksArray = []
        const { tasks } = getState()
        const { availableTasks } = tasks
        newTasksArray.push(...availableTasks, { 
            id: uuid.v4(),
            ...taskData, 
            active: true, 
            createdAt: `${customDate[1]} ${customDate[2]}`
        } )
       await AsyncStorage.setItem(KEY, JSON.stringify(newTasksArray) )

        dispatch({
            type: ACTION_TYPES.CREATE_TASK_SUCCESS,
            payload: true,
        });

    } catch (error) {
        dispatch({
            type: ACTION_TYPES.CREATE_TASK_ERROR,
            payload: error,
        });
    }
};
export const resetNewTaskAction = () => async (
    dispatch
) => {
        dispatch({
            type: ACTION_TYPES.RESET_NEW_TASK_STATE,
            payload: false,
        });
};
