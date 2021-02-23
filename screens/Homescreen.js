import React, {useEffect, useState} from "react"
import {View, StyleSheet, FlatList} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {getTasksAction} from "../redux/actions/getTasksAction"
import {resetNewTaskAction} from "../redux/actions/createTaskAction"
import {reseDeleteAction} from "../redux/actions/deleteTasksAction"
import colors from "../utils/colors"
import AppText from "../components/common/AppText"
import {FULL_HEIGHT_SIZE} from "../utils/dimensions"
import AddButton from "../components/common/AddButton"
import TasksInfoCards from "../components/TasksCountersCards"
import NoTasksAvailable from "../components/NoTasksAvailable"
import TopHeader from "../components/TopHeader"
import TaskDetailsCard from "../components/TaskDetailsCard"
import TaskSeparator from "../components/common/separator"

function Homescreen({navigation}) {
  const [tasks, setTasks] = useState([])
  const [activeAasks, setActiveTasks] = useState([])
  const [doneTasks, setDoneTasks] = useState([])
  const dispatch = useDispatch()
  const {availableTasks, getTasksError} = useSelector((state) => state.tasks)
  useEffect(() => {
    dispatch(getTasksAction())
  }, [navigation])

  useEffect(() => {
    if (availableTasks && availableTasks.length !== 0) {
      const getActiveTasks = availableTasks.filter(
        (task) => task.active === true
      )
      const getDoneTasks = availableTasks.filter(
        (task) => task.active === false
      )
      setTasks(availableTasks)
      setActiveTasks(getActiveTasks)
      setDoneTasks(getDoneTasks)
    }
  }, [availableTasks])
  return (
    <>
      <TopHeader />
      <View style={styles.darkPart}>
        <View style={styles.whiteCard}>
          <AppText style={{fontFamily: "bold", fontSize: 25}}>Welcome</AppText>
          {tasks ? (
              <>
            <TasksInfoCards
             activeCounter={activeAasks.length}  
             doneCounter={doneTasks.length} 
             totalCounter={tasks.length} />
            <View style={{height: 20}}/>
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
})

export default Homescreen
