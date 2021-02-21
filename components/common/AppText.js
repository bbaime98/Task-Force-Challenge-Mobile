import React from "react"
import {Text, StyleSheet} from "react-native"
import colors from "../../utils/colors"

export default function AppText({children, style, ...otherProps}) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: colors.black,
        fontFamily: 'semiBold',
        marginVertical: 10,
    }
})
