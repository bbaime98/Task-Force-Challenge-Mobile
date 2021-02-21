// import AsyncStorage from "@react-native-async-storage/async-storage"
 import {createSlice} from '@reduxjs/toolkit'
 import { AsyncStorage } from "react-native";

 let lastId = 0
 const key = '@we'
// const initialState =  AsyncStorage.getItem(key, JSON.stringify([{id: 3, name: "aime"}]))
// console.log("____INITIAL______", initialState)
let initialState = []
const storeTasks = async (value)=>{
    try {
        const jsonValue = JSON.stringify(value)
        console.log("__________JSON", jsonValue)
        await AsyncStorage.setItem(key, jsonValue)
      } catch (e) {
        console.log('__STORING __ERROR___', e)
      }
};
const fetchTasks = async ()=>{
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        // return jsonValue != null ? JSON.parse(jsonValue) : [];
        if(jsonValue != null){
            initialState =JSON.parse(jsonValue)
            return initialState
        }
        else{
            return initialState
        }
      } catch (e) {
        console.log('__STORING __ERROR___', e)
      }
};
fetchTasks()
const slice =  createSlice(async()=>({
    name: "tasks",
    initialState:fetchTasks(),
    reducers:{
        taskCreated: (tasks, action) =>{
            console.log("@@__1__TAKS CREATED______", action)
            // console.log("@@__3__initialState_____", initialState)
            tasks.push({
                id: ++lastId,
                description: action.payload.description,
                priority: action.payload.priority 
             })
             console.log("@@__2__TAKS CREATED______", tasks, typeof tasks)
             storeTasks(tasks)
         },
        taskDeleted: (tasks, action) =>{
            tasks.filter(task=>task.id !== action.payload.id )
     }
    }
}))
export const { taskCreated, taskDeleted} = slice.actions
export default slice.reducer

export const getTasks = state => console.log("^^^^^^___STATE", state)
