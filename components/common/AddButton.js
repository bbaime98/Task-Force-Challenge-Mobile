import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import colors from '../../utils/colors';

const AddButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Feather name="plus" size={24} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.dark,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AddButton
