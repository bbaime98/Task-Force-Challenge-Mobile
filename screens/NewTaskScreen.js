import React, {useState, useEffect} from 'react'
import { View, StyleSheet,Button, Text, TouchableHighlight, TouchableOpacity, Keyboard, ScrollView, } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Picker } from "native-base";
import * as Yup from "yup";

import colors from '../utils/colors'
import { FULL_HEIGHT_SIZE, FULL_WIDTH_SIZE } from '../utils/dimensions'
import AppText from '../components/common/AppText'
import AppTextInput from '../components/common/AppTextInput'
import SubmitButton from '../components/common/form/SubmitButton';
import Form from '../components/common/form/Form';
import FormField from '../components/common/form/FormField';
import {useDispatch, useSelector} from 'react-redux'
import {taskCreated, getTasks} from '../redux/tasks'
import { AsyncStorage } from "react-native";


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).max(140).label("Title"),
    description: Yup.string().required().trim().min(1).max(240).label("Description"),
  });

const  NeweTaskScreen =(props)=>{
  const [priority, setPriority] = useState('LOW')
    // useEffect(()=>{
    //    return ()=> {
    //        Keyboard.removeAllListeners()
    //        Keyboard.removeListener()
    //        Keyboard.removeCurrentListener()
    //        Keyboard.removeSubscription()
    //    }
    // },[])
    useEffect(()=>{
      const storeData = async () =>{
        try {
                const ok =  await AsyncStorage.getItem("@we")
                console.log('_GET SUCCESS__', ok)

                } catch (e) {
                  // saving error
                  console.log('__GET __ERROR___', e)
                }
      }
      storeData()
    },[])
    const dispatch = useDispatch()
    const handleSubmit =(taskData, {resetForm}) =>{
      dispatch(taskCreated({...taskData, priority}))
      resetForm()
      setPriority('LOW')
    }
    const bugs = useSelector(getTasks)
    useEffect(()=>{
      console.log("++++++++TAKS____", bugs)
      // dispatch(getUnresolvedBugs)
    },[])
return(
    <ScrollView
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    
    >
      <View style={styles.main}>
        <View style={styles.container}>
            <AppText style={{fontFamily: 'bold', fontSize: 25}}>New task</AppText>
            <TouchableHighlight style={styles.selectImage}>
            <AppText style={{color: colors.secondary, padding: 20, }}>Tap to add Image</AppText>
            </TouchableHighlight>
            <Form
          initialValues={{ title: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            label="Title"
            name="title"
            placeholder="Task title(140 Characters)"
          />
          <FormField
           autoCorrect={false}
            label="Description"
            name="description"
            maxLength={240}
             multiline={true}
             placeholder="240 Characters"
             height={110}
             textAlignVertical="top"
             returnKeyType="done"
             onSubmitEditing={Keyboard.dismiss}
            //  numberOfLines={3} 
          />
              <AppText>Priority</AppText>
            <Picker
              mode="dropdown"
              iosHeader="Select priority"
              iosIcon={ <AntDesign style={{paddingRight: 20}} name="caretdown" size={10} color="black" />}
              style={styles.priorityOptions}
              selectedValue={priority}
              onValueChange={(value) => setPriority(value)}
            >
              <Picker.Item label="LOW" value="LOW" />
              <Picker.Item label="MEDIUM" value="MEDIUM" />
              <Picker.Item label="HIGH" value="HIGH" />
              </Picker>
            <SubmitButton title="create task" onPress/>

          </Form>
            {/* <AppText>Add image</AppText>
            <TouchableHighlight style={styles.selectImage}>
            <AppText style={{color: colors.secondary, padding: 20, }}>Tap to add Image</AppText>
            </TouchableHighlight>
            <AppText>Tilte</AppText>
            <AppTextInput placeholder="Task title(140 Characters)"/>
            <AppText>Description</AppText>
            <AppTextInput
            maxLength={240}
             multiline={true}
             placeholder="240 Characters"
             height={110}
             textAlignVertical="top"
             returnKeyType="done"
             returnKeyLabel="ok"
             onSubmitEditing={()=>{Keyboard.dismiss()}}
             />
            <AppText>Priority</AppText>
            <Picker
              mode="dropdown"
              iosHeader="Select priority"
              iosIcon={ <AntDesign style={{paddingRight: 20}} name="caretdown" size={10} color="black" />}
              style={styles.priorityOptions}
            >
              <Picker.Item label="LOW" value="key0" />
              <Picker.Item label="MEDIUM" value="key1" />
              <Picker.Item label="HIGH" value="key2" />
            </Picker> */}

        </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    container: {
        marginVertical: 15,
        width: FULL_WIDTH_SIZE - 50
    },
    selectImage: {
        backgroundColor: colors.medium,
    height: FULL_HEIGHT_SIZE / 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    },
    priorityOptions:{
        alignItems: "flex-end",
        backgroundColor: colors.medium,
        height: FULL_HEIGHT_SIZE / 17,
        width: "100%",
    }

})

export default NeweTaskScreen
