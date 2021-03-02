import React from "react"
import {View, StyleSheet} from "react-native"
import AppText from "../common/AppText"
import colors from "../../utils/colors"

function PiorityIndicator({priority, status, width = "40%", height = 20}) {
  return (
    <View
      style={[
        styles.priorityContainer,
        {
          backgroundColor:
            priority === "LOW" && status
              ? colors.medium
              : priority === "MEDIUM" && status
              ? colors.secondary
              : priority === "HIGH" && status
              ? colors.dark
              : !status && colors.disabled,
          width,
          height,
        },
      ]}
    >
      <AppText
        style={[
          styles.priorityText,
          {
            color:
              priority === "LOW" && status
                ? colors.black
                : priority === "MEDIUM" && status
                ? colors.white
                : priority === "HIGH" && status
                ? colors.primary
                : !status && colors.medium,
          },
        ]}
      >
        {priority}
      </AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  priorityText: {
    fontSize: 10,
    marginVertical: 0,
    color: colors.white,
  },
  priorityContainer: {
    borderRadius: 50,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
})

export default PiorityIndicator
