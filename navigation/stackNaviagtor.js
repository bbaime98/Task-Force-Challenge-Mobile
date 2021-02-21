import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Homescreen';
import NewTaskScreen from '../screens/NewTaskScreen';

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
            component={NewTaskScreen}
            options={{
                title: "New task",
            }}
        />

    </Stack.Navigator>

);
