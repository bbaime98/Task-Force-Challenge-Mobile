import { AsyncStorage } from "react-native";
import * as ACTION_TYPES from './actionTypes';
import { KEY } from '../../utils/key'

export const getTasksAction = () => async (
    dispatch
) => {
    try {
        const jsonValue = await AsyncStorage.getItem(KEY)
        if (jsonValue != null) {
            const tasks = initialState = JSON.parse(jsonValue)
            dispatch({
                type: ACTION_TYPES.GET_TASKS_SUCCESS,
                payload: tasks,
            });
        }
        else {
            dispatch({
                type: ACTION_TYPES.GET_TASKS_ERROR,
                payload: tasks,
            });
        }

    } catch (error) {
        dispatch({
            type: ACTION_TYPES.GET_TASKS_ERROR,
            payload: error,
        });
    }
};
