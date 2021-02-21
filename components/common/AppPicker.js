import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { Picker } from "native-base";

import AppText from '../components/common/AppText'
import colors from '../utils/colors'
import { FULL_HEIGHT_SIZE } from '../utils/dimensions'


const  AppPicker =({lable})=>{
return (
    <>
            <AppText>{lable}</AppText>
            <Picker
              mode="dropdown"
              iosHeader="Select priority"
              iosIcon={ <AntDesign style={{paddingRight: 20}} name="caretdown" size={10} color="black" />}
              style={styles.priorityOptions}
            >
              <Picker.Item label="LOW" value="key0" />
              <Picker.Item label="MEDIUM" value="key1" />
              <Picker.Item label="HIGH" value="key2" />
            </Picker>
        </>
    )
}

const styles = StyleSheet.create({
    priorityOptions:{
        alignItems: "flex-end",
        backgroundColor: colors.medium,
        height: FULL_HEIGHT_SIZE / 17,
        width: "100%"
    }

})

export default AppPicker
