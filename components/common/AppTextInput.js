import React, { useEffect } from "react"
import { StyleSheet, View, TextInput } from "react-native"
import colors from "../../utils/colors"

export default function AppTextInput({ icon, width = "100%",height, ...otherProps }) {
    // useEffect(()=>{
    //     console.log("++++++++++++++++HEIGT", height)
    // })
  return (
    <View style={[styles.container, { width, height }]}>
      <TextInput
        placeholderTextColor={colors.secondary}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    borderRadius: 5,
    flexDirection: "row",
    // padding: 10,
    marginVertical: 10,
  },
  textInput: {
      padding: 10,
    // marginRight: 10,
    fontSize: 18,
    color: colors.black,
    fontFamily: 'semiBold'
  },
})
