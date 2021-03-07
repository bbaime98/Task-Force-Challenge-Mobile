import React from "react"
import {StyleSheet, View} from "react-native"
import colors from "../../utils/colors"

 const Separator = ({style}) =>{
  return <View style={[styles.separator, style]} />
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.medium,
  },
})
export default Separator
