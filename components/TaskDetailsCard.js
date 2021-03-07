import React from "react"
import {View, StyleSheet, TouchableOpacity} from "react-native"
import {Ionicons, SimpleLineIcons} from "@expo/vector-icons"
import colors from "../utils/colors"
import AppText from "./common/AppText"
import PiorityIndicator from "./common/PiorityIndicator"

const TaskDetailsCard = ({
  active,
  title,
  createdAt,
  modified,
  priority,
  index,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <TouchableOpacity
          style={[
            styles.checkBox,
            {
              borderColor: !active ? colors.disabled : colors.secondary,
              backgroundColor: !active ? colors.disabled : "transparent",
            },
          ]}
        >
          <Ionicons
            name="ios-checkmark"
            size={20}
            color={active ? colors.secondary : colors.white}
          />
        </TouchableOpacity>
      </View>

      <View style={{paddingLeft: 20, width: "100%"}}>
        <AppText
          style={[
            styles.taskName,
            {color: !active ? colors.disabled : colors.dark},
          ]}
        >
          {index} {title}
        </AppText>

        <PiorityIndicator status={active} priority={priority} />
        <View style={styles.dateContainer}>
          <AppText
            style={[
              styles.date,
              {color: !active ? colors.disabled : colors.secondary},
            ]}
          >
            created {createdAt}
          </AppText>
          {modified && (
            <AppText
              style={[
                styles.date,
                {
                  paddingLeft: 5,
                  color: !active ? colors.disabled : colors.secondary,
                },
              ]}
            >
              Modified {modified}
            </AppText>
          )}
        </View>
      </View>

      <View>
        <SimpleLineIcons
          name="options-vertical"
          size={10}
          color={colors.dark}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
  checkBox: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.secondary,
  },
  dateContainer: {
    flexDirection: "row",
  },
  date: {
    fontSize: 8,
    color: colors.secondary,
    fontFamily: "semiBold",
    marginVertical: 1,
  },
  taskName: {
    fontSize: 14,
    marginVertical: 0,
  },
})

export default TaskDetailsCard
