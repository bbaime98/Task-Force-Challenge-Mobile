import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts  } from 'expo-font';

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
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={{fontFamily: 'bold'}}>Open up App.js to start working on your app!</Text>
      <Text style={{fontFamily: 'semiBold'}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
