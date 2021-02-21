// import AsyncStorage from "@react-native-async-storage/async-storage"
 import {createSlice} from '@reduxjs/toolkit'

 let lastId = 0
 const key = 'TASKS'
// const initialState =  AsyncStorage.getItem(key, JSON.stringify([{id: 3, name: "aime"}]))
// console.log("____INITIAL______", initialState)
const slice = createSlice({
    name: "tasks",
    initialState: [],
    reducers:{
        taskCreated: (tasks, action) =>{
            tasks.push({
                id: ++lastId,
                description: action.payload.description,
                priority: action.payload.priority 
             })
            //  console.log("@@____TAKS CREATED______", tasks)
        //  await AsyncStorage.setItem(key, JSON.stringify(tasks));
         },
        taskDeleted: (tasks, action) =>{
            tasks.filter(task=>task.id !== action.payload.id )
     }
    }
})
export const { taskCreated, taskDeleted} = slice.actions
export default slice.reducer
//  export default createReducer([], {
//      [taskCreated.type]: (tasks, action) =>{
//         tasks.push({
//             id: 1,
//             description: action.payload.description,
//             priority: action.payload.priority 
//          })
//      },
//      [taskDeleted.type]: (tasks, action) =>{
//         tasks.filter(task=>task.id !== action.payload.id )
//      }
//  })

//  const reducer = (state = [], action) =>{
// switch(action.type){
//     case taskCreated.type:
//         return [
//             ...state,
//             {
//                 id: 1,
//                 description: action.payload.description,
//                 priority: action.payload.priority
//             }
//         ]
//     case taskDeleted.type:
//         return state.filter(bug=>bug.id !== action.payload.id )
// }
//  }
