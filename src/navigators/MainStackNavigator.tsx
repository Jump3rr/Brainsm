import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../components/home/HomeScreen";
import MainTabNavigator from "./MainTabNavigator";

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Group
                screenOptions={{headerShown: false}}
            >
            <MainStack.Screen name ="Tabs" component={MainTabNavigator} />
            </MainStack.Group>
        </MainStack.Navigator>
    )
}

export default MainStackNavigator