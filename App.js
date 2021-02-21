import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts  } from 'expo-font';
import {Provider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';
import configureStore from './redux/configureStore'
import NeweTaskScreen from './screens/NewTaskScreen';
import StackNaviagtor from './navigation/stackNaviagtor';

const store = configureStore()
export default function App() {
  let [fontsLoaded] = useFonts({
    'bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'semiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
      <StackNaviagtor />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
