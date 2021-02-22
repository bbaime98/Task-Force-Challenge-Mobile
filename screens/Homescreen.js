import React, {useEffect} from "react"
import {View, StyleSheet, Button, Text, Image} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {getTasksAction} from "../redux/actions/getTasksAction"
import {resetNewTaskAction} from "../redux/actions/createTaskAction"
import colors from "../utils/colors"
import AppText from "../components/common/AppText"
import {FULL_HEIGHT_SIZE, FULL_WIDTH_SIZE} from "../utils/dimensions"
import Card from "../components/common/Card"
import AppButton from "../components/common/AppButton"
import AddButton from "../components/common/AddButton"
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons"
import {useState} from "react/cjs/react.development"

function Homescreen({navigation}) {
  const [tasks, setTasks] = useState([])
  const [activeAasks, setActiveTasks] = useState([])
  const [doneTasks, setDoneTasks] = useState([])
  const dispatch = useDispatch()
  const {availableTasks, getTasksError} = useSelector((state) => state.tasks)
  useEffect(() => {
    dispatch(getTasksAction())
  }, [])

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
      <View style={styles.header}>
        <Image source={require("../assets/IW_logo.png")} style={styles.logo} />
        <View style={{flexDirection: "row", marginRight: 30}}>
          <Feather
            name="search"
            size={24}
            color="white"
            style={{paddingRight: 20}}
          />
          <MaterialCommunityIcons
            name="filter-variant"
            size={24}
            color="white"
          />
        </View>
      </View>
      <View style={styles.darkPart}>
        <View style={styles.whiteCard}>
          <AppText style={{fontFamily: "bold", fontSize: 25}}>Welcome</AppText>
          {tasks ? (
            <>
              <View style={styles.smallCardsContainer}>
                <Card
                  cardStyle={styles.cardStyle}
                  cardNameStyle={styles.cardNameStyle}
                  counterStyle={styles.counterStyle}
                  count={tasks.length}
                  cardName="Total Tasks"
                />
                <Card
                  cardStyle={styles.cardStyle}
                  cardNameStyle={styles.cardNameStyle}
                  counterStyle={styles.counterStyle}
                  count={activeAasks.length}
                  cardName="Active Tasks"
                />
                <Card
                  cardStyle={styles.cardStyle}
                  cardNameStyle={styles.cardNameStyle}
                  counterStyle={styles.counterStyle}
                  count={doneTasks.length}
                  cardName="Tasks Done"
                />
              </View>
            </>
          ) : (
            <>
              <View style={styles.smallCardsContainer}>
                <Card count={0} cardName="Active Tasks" />
                <Card count={0} cardName="Active Tasks" />
              </View>
              <View style={styles.smallCardsContainer}>
                <Card count={0} cardName="Active Tasks" />
                <Card count={0} cardName="Active Tasks" />
              </View>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 60,
                }}
              >
                <AppText style={styles.nothing}>Nothing here</AppText>
                <AppText style={styles.subText}>
                  Just like your crush's replies
                </AppText>
                <View>
                  <AppButton
                    style={{fontSize: 12, fontFamily: "bold"}}
                    title="START with a new task"
                    width="80%"
                    onPress={() => {
                      dispatch(resetNewTaskAction())
                      navigation.navigate("CreateTask")
                    }}
                  />
                </View>
              </View>
            </>
          )}

          <View
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              bottom: 20,
              right: 10,
            }}
          >
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
  counterStyle: {
    fontSize: 18,
  },
  cardNameStyle: {
    fontSize: 11,
  },
  cardStyle: {
    width: "32%",
    height: 65,
  },
  nothing: {
    fontFamily: "bold",
    color: colors.dark,
    textTransform: "uppercase",
    fontSize: 15,
  },
  subText: {
    color: colors.secondary,
    fontSize: 14,
    marginVertical: 0,
  },
  header: {
    position: "absolute",
    top: 20,
    zIndex: 1000,
    width: FULL_WIDTH_SIZE,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logo: {
    height: 30,
    width: 30,
    marginLeft: 30,
  },
  smallCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  darkPart: {
    flex: 0.37,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  whitePart: {
    // flex: 0.6,
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
