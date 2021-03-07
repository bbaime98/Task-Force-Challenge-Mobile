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
import SubmitButton from "../components/common/form/SubmitButton"
import Form from "../components/common/form/Form"
import FormField from "../components/common/form/FormField"
import {useDispatch} from "react-redux"
import {editTaskAction} from "../redux/actions/editTasksAction"

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(140).label("Title"),
  description: Yup.string()
    .required()
    .trim()
    .min(1)
    .max(240)
    .label("Description"),
})

const EditScreen = ({navigation, route}) => {
  const {taskDetails} = route.params
  const [priority, setPriority] = useState(taskDetails.priority)
  const [image, setImage] = useState(taskDetails.image)
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

  const dispatch = useDispatch()
  const handleSubmit = (taskData, {resetForm}) => {
    dispatch(editTaskAction({...taskData, priority, image, id: taskDetails.id}))
    navigation.goBack()
    resetForm()
  }
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.main}>
        <View style={styles.container}>
          <AppText style={{fontFamily: "bold", fontSize: 25}}>Edit task</AppText>
            <TouchableOpacity  onPress={selectImage}>
          {image && <Image style={styles.imageBg} source={{uri: image}} />}
            </TouchableOpacity>
          <Form
            initialValues={{title: taskDetails.title, description: taskDetails.description,}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <FormField
              maxLength={140}
              label="Title"
              name="title"
              placeholder="Task title(140 Characters)"
              defaultValue={taskDetails.title}
            />
            <FormField
              label="Description"
              name="description"
              maxLength={240}
              multiline={true}
              placeholder="240 Characters"
              height={110}
              textAlignVertical="top"
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
              defaultValue={taskDetails.description}
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
            <SubmitButton title="edit task" onPress />
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

export default EditScreen
