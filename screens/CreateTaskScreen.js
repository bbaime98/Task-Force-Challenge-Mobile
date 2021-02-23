import React, {useState, useEffect} from "react"
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native"
import {AntDesign} from "@expo/vector-icons"
import {Picker} from "native-base"
import * as Yup from "yup"
import * as ImagePicker from "expo-image-picker"

import colors from "../utils/colors"
import {FULL_HEIGHT_SIZE, FULL_WIDTH_SIZE} from "../utils/dimensions"
import AppText from "../components/common/AppText"
import AppTextInput from "../components/common/AppTextInput"
import SubmitButton from "../components/common/form/SubmitButton"
import Form from "../components/common/form/Form"
import FormField from "../components/common/form/FormField"
import {useDispatch, useSelector} from "react-redux"
import {createTaskAction} from "../redux/actions/createTaskAction"
import {getTasksAction} from "../redux/actions/getTasksAction"
import {AsyncStorage} from "react-native"

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(140).label("Title"),
  description: Yup.string()
    .required()
    .trim()
    .min(1)
    .max(240)
    .label("Description"),
})

const NeweTaskScreen = ({navigation}) => {
  const [priority, setPriority] = useState("LOW")
  const [image, setImage] = useState(null)
  useEffect(() => {
    requestPermission()
  }, [])

  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted) alert("You need to enable permission to access the library.")
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      })
      if (!result.cancelled) setImage(result.uri)
    } catch (error) {
      console.log("Error reading an image", error)
    }
  }
  // useEffect(()=>{
  //   const storeData = async () =>{
  //     try {
  //             const ok =  await AsyncStorage.removeItem("@we")
  //             console.log('_GET SUCCESS__', ok)

  //             } catch (e) {
  //               // saving error
  //               console.log('__GET __ERROR___', e)
  //             }
  //   }
  //   storeData()
  // },[])
  const dispatch = useDispatch()
  const handleSubmit = (taskData, {resetForm}) => {
    dispatch(createTaskAction({...taskData, priority, image}))
    resetForm()
    setPriority("LOW")
  }
  const selectoror = useSelector((state) => state.newTask)

  useEffect(() => {
    if (selectoror.success !== null && selectoror.success !== false) {
      dispatch(getTasksAction())
      navigation.navigate("Home")
    }
    if (selectoror.error) {
      console.log("Error_", selectoror)
    }
  }, [selectoror])
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.main}>
        <View style={styles.container}>
          <AppText style={{fontFamily: "bold", fontSize: 25}}>New task</AppText>
          {image && <Image style={styles.imageBg} source={{uri: image}} />}
          {image === null && (
            <TouchableOpacity style={styles.selectImage} onPress={selectImage}>
              <AppText style={{color: colors.secondary, padding: 20}}>
                Tap to add Image
              </AppText>
            </TouchableOpacity>
          )}
          <Form
            initialValues={{title: ""}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <FormField
              maxLength={140}
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
              iosIcon={
                <AntDesign
                  style={{paddingRight: 20}}
                  name="caretdown"
                  size={10}
                  color="black"
                />
              }
              style={styles.priorityOptions}
              selectedValue={priority}
              onValueChange={(value) => setPriority(value)}
            >
              <Picker.Item label="LOW" value="LOW" />
              <Picker.Item label="MEDIUM" value="MEDIUM" />
              <Picker.Item label="HIGH" value="HIGH" />
            </Picker>
            <SubmitButton title="create task" onPress />
          </Form>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginVertical: 15,
    width: FULL_WIDTH_SIZE - 50,
  },
  selectImage: {
    backgroundColor: colors.medium,
    height: FULL_HEIGHT_SIZE / 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  imageBg: {
    height: FULL_HEIGHT_SIZE / 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  priorityOptions: {
    alignItems: "flex-end",
    backgroundColor: colors.medium,
    height: FULL_HEIGHT_SIZE / 17,
    width: "100%",
  },
})

export default NeweTaskScreen
