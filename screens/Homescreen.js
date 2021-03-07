import React, {useEffect, useState} from "react"
import {View, StyleSheet, FlatList} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {getTasksAction} from "../redux/actions/getTasksAction"
import {resetNewTaskAction} from "../redux/actions/createTaskAction"
import {reseDeleteAction, deleteAllTasksAction} from "../redux/actions/deleteTasksAction"
import {changeAllTasksStatusAction} from "../redux/actions/editTasksAction"
import colors from "../utils/colors"
import AppText from "../components/common/AppText"
import {FULL_HEIGHT_SIZE} from "../utils/dimensions"
import AddButton from "../components/common/AddButton"
import AppButton from "../components/common/AppButton"
import TasksInfoCards from "../components/TasksCountersCards"
import NoTasksAvailable from "../components/NoTasksAvailable"
import TopHeader from "../components/TopHeader"
import TaskDetailsCard from "../components/TaskDetailsCard"
import TaskSeparator from "../components/common/separator"
import AppModal from "../components/AppModal"

function Homescreen({navigation}) {
  const [tasks, setTasks] = useState([])
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const {availableTasks, deleted} = useSelector((state) => state.tasks)

  useEffect(() => {
    dispatch(getTasksAction())
  }, [])

  useEffect(() => {

    if (availableTasks && availableTasks.length !== 0) {
      setTasks(availableTasks)
    }

  }, [availableTasks, deleted])

  return (
    <>
      <AppModal 
        visible={visible} 
        yesHandler={()=> {
          dispatch(deleteAllTasksAction())
          setVisible(false)
        }}
        noHandler={()=>setVisible(false)}
        modalTitle="Are sure you want to delete all your tasks?"
       />
      <TopHeader />
      <View style={styles.darkPart}>
        <View style={styles.whiteCard}>
          <AppText style={{fontFamily: "bold", fontSize: 25}}>Welcome</AppText>
          {availableTasks && availableTasks.length !== 0 ? (
              <>
            <TasksInfoCards
             activeCounter={availableTasks.filter(
              (task) => task.active === true
            ).length}  
             doneCounter={ availableTasks.filter(
              (task) => task.active === false
            ).length} 
             totalCounter={tasks.length} />
            <View style={styles.actionsBtnContainer} >
            <AppButton
            title="CHANGE STATUS"
            width="45%"
            btnStyle={styles.changeStatusBtn}
            style={styles.changeStatusText}
            onPress={()=> dispatch(changeAllTasksStatusAction())}
          />
            <AppButton
            title="RESET"
            width="40%"
            btnStyle={styles.deleteBtn}
            style={styles.deleteText}
            onPress={()=> setVisible(true)}
          />
          </View>
            <View style={{height: 50}}/>
            <FlatList
            showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(task) => task.id}
          ItemSeparatorComponent={TaskSeparator}
          renderItem={({ item, index }) => (
            <TaskDetailsCard
              index={index + 1}
              title={item.title}
              priority={item.priority}
              active={item.active}
              createdAt={item.createdAt}
              modified={item.modified}
              onPress={()=>{  
                dispatch(reseDeleteAction())
                navigation.navigate("Details", {taskDetails: item})
              }}
            />
          )}
        />
            </>
          ) : (
            <NoTasksAvailable navigation={navigation}/>
          )}

          <View style={styles.addBtnContainer} >
            <AddButton
              onPress={() => {
                dispatch(resetNewTaskAction())
                navigation.navigate("CreateTask")
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.whitePart}></View>
    </>
  )
}

const styles = StyleSheet.create({
addBtnContainer: {
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 20,
    right: 10,
  },
  darkPart: {
    flex: 0.37,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  whitePart: {
    backgroundColor: colors.medium,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: colors.white,
    position: "absolute",
    width: "85%",
    height: FULL_HEIGHT_SIZE - 80,
    borderRadius: 5,
    marginTop: 60,
    top: 20,
    padding: 20,
    zIndex: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  actionsBtnContainer: {
    position: "absolute",
    top: 130,
    left: 10,
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    zIndex: 1000,
  },
  deleteBtn: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    height: 42,
    borderColor: colors.dark,
    padding: 8,
  },
  deleteText: {
    color: colors.dark,
    fontSize: 10,
    fontFamily: "bold",
  },
  changeStatusBtn: {
    backgroundColor:colors.primary,
    borderWidth: 1,
    height: 42,
    borderColor: colors.primary,
  },
  changeStatusText: {
    color: colors.white,
    fontSize: 10,
    fontFamily: "bold",
  },
})

export default Homescreen
