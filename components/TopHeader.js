import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons"
import {FULL_WIDTH_SIZE} from "../utils/dimensions"

function TopHeader(){
return(
    <View style={styles.header}>
    <Image source={require("../assets/IW_logo.png")} style={styles.logo} />
    <View style={{flexDirection: "row", marginRight: 30}}>
      <Feather
        name="search"
        size={24}
        color="white"
        style={{paddingRight: 20}}
      />
      <MaterialCommunityIcons
        name="filter-variant"
        size={24}
        color="white"
      />
    </View>
  </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        top: 20,
        zIndex: 1000,
        width: FULL_WIDTH_SIZE,
        justifyContent: "space-between",
        flexDirection: "row",
      },
      logo: {
        height: 30,
        width: 30,
        marginLeft: 30,
      },
})

export default TopHeader
