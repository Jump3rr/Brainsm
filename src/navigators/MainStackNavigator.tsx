import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../components/home/HomeScreen";
import MainTabNavigator from "./MainTabNavigator";
import { setSounds } from '../actions/soundsActions';
import {getSounds } from '../actions/soundsActions';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-native';

const MainStack = createNativeStackNavigator();

type SetSounds = ReturnType<typeof setSounds>;

const MainStackNavigator = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSounds());
    }, [dispatch]);
    
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