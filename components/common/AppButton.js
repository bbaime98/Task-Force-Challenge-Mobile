import React from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"
import colors from "../../utils/colors"

const AppButton = ({ title, onPress, style,btnStyle, bgColor = "dark", width = "50%" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[bgColor], width }, btnStyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, style]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 35,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontFamily: "semiBold",
    textTransform: "uppercase",
  },
})
