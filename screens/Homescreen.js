import React from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'

function Homescreen({navigation}){
return(
        <View style={styles.container}>
            <Text>hello</Text>
            <Button title="NAVIGATE" onPress={()=> navigation.navigate("CreateTask")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {}
})

export default Homescreen
