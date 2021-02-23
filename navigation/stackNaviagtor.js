import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Homescreen';
import CreateTaskScreen from '../screens/CreateTaskScreen';

const Stack = createStackNavigator();

export default ScreenNavigator = () => (
    <Stack.Navigator>

        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />



        <Stack.Screen
            name="CreateTask"
            component={CreateTaskScreen}
            options={{
                title: "New task",
            }}
        />

    </Stack.Navigator>

);
