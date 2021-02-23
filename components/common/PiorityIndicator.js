import React from "react"
import {View, StyleSheet} from "react-native"
import AppText from "../common/AppText"
import colors from "../../utils/colors"

function PiorityIndicator({priority, width = "40%", height = 20}) {
  return (
    <View
      style={[
        styles.priorityContainer,
        {
          backgroundColor:
            priority === "LOW"
              ? colors.medium
              : priority === "MEDIUM"
              ? colors.secondary
              : colors.dark,
              width,
              height
        },
      ]}
    >
      <AppText
        style={[
          styles.priorityText,
          {
            color:
              priority === "LOW"
                ? colors.black
                : priority === "MEDIUM"
                ? colors.white
                : colors.primary,
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
