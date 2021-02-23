import React from "react"
import {View, StyleSheet, Image} from "react-native"
import AppText from "../components/common/AppText"
import IconButton from "../components/common/IconButton"
import AppButton from "../components/common/AppButton"
import PiorityIndicator from "../components/common/PiorityIndicator"
import colors from "../utils/colors"
import {FULL_HEIGHT_SIZE, FULL_WIDTH_SIZE} from "../utils/dimensions"

function TaskDetailsScreen({route}) {
  const {taskDetails} = route.params
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: taskDetails.image,
        }}
      />
      <View style={styles.actionContainer}>
        <View
          style={{
            // backgroundColor: "red",
            width: "30%",
          }}
        >
          <PiorityIndicator
            width="100%"
            height={25}
            priority={taskDetails.priority}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // paddingLeft: FULL_WIDTH_SIZE / 4,
            paddingLeft: 20,
            // backgroundColor:"green",
            width: "60%",
          }}
        >
          <IconButton name="edit" />
          <IconButton name="close" />
          <AppButton
            title="DONE"
            width="40%"
            btnStyle={styles.doneBtn}
            style={styles.doneText}
          />
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <AppText style={styles.title}>{taskDetails.title}</AppText>
        <AppText style={styles.label}>Description</AppText>
        <AppText style={styles.description}>{taskDetails.description}</AppText>

        <View style={{flexDirection: "row"}}>
          <AppText style={styles.date}>Created {taskDetails.createdAt}</AppText>
          <AppText style={[styles.date, {paddingLeft: 20}]}>
            Modified 14 Feb 2021
          </AppText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: FULL_WIDTH_SIZE,
    height: FULL_HEIGHT_SIZE / 4,
  },
  title: {
    color: colors.black,
    fontFamily: "bold",
  },
  label: {
    fontSize: 14,
    fontFamily: "bold",
  },
  description: {
    color: colors.secondary,
    marginVertical: 5,
    fontSize: 15,
  },
  descriptionContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    // backgroundColor: "red",
  },
  doneBtn: {
    backgroundColor: "transparent",
    borderWidth: 2,
    height: 35,
    borderColor: colors.secondary,
    padding: 0,
    marginVertical: 0,
    margin: 10,
  },
  doneText: {
    color: colors.dark,

    fontSize: 15,
    fontFamily: "bold",
  },
  date: {
    fontSize: 10,
    color: colors.secondary,
    fontFamily: "semiBold",
    marginVertical: 1,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 10,
  },
})

export default TaskDetailsScreen
