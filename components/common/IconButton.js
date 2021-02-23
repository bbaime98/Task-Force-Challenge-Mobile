import React from "react"
import {TouchableOpacity, StyleSheet} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import colors from "../../utils/colors"

function IconButton({name, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialIcons name={name} size={24} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.medium,
      height: 40,
      width: 40,
      borderRadius: 5,
      justifyContent: "center",
      alignItems:"center",
      margin: 5
  },
})

export default IconButton
