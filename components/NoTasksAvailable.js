import React from "react"
import {View, StyleSheet} from "react-native"
import {useDispatch} from "react-redux"
import AppButton from "./common/AppButton"
import AppText from "./common/AppText"
import Card from "./common/Card" 
import colors from '../utils/colors'
import {resetNewTaskAction} from "../redux/actions/createTaskAction"

const NoTasksAvailable = ({navigation }) => {
  const dispatch = useDispatch()
  return (
    <>
      <View style={styles.smallCardsContainer}>
        <Card cardNameStyle={styles.cardName} count={0} cardName="Total Tasks" />
        <Card cardNameStyle={styles.cardName} count={0} cardName="Active Tasks" />
      </View>
      <View style={styles.smallCardsContainer}>
        <Card cardNameStyle={styles.cardName} count={0} cardName="Tasks Done" />
        <Card cardNameStyle={styles.cardName} count={0} cardName="Active High Priority" />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <AppText style={styles.nothing}>Nothing here</AppText>
        <AppText style={styles.subText}>Just like your crush's replies</AppText>
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
  )
}

const styles = StyleSheet.create({
  cardName: {
    fontSize: 11,
    fontFamily: "bold"
},
  nothing: {
    fontFamily: "bold",
    color: colors.dark,
    textTransform: "uppercase",
    fontSize: 15,
  },
  smallCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  subText: {
    color: colors.secondary,
    fontSize: 14,
    marginVertical: 0,
  },
})

export default NoTasksAvailable
