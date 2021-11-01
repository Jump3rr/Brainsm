import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Player from "../components/player/player";
import MainTabNavigator from "./MainTabNavigator";
import { setSounds } from '../actions/soundsActions';
import {getSounds } from '../actions/soundsActions';
import { setNatureSounds } from '../actions/natureActions';
import { getNatureSounds } from '../actions/natureActions';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-native';
import { getASMRSounds } from '../actions/asmrActions';


const MainStack = createNativeStackNavigator();

type GetSounds = ReturnType<typeof getSounds>;
type GetNatureSounds = ReturnType<typeof getNatureSounds>;
type GetASMRSounds = ReturnType<typeof getASMRSounds>;

const MainStackNavigator = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetNatureSounds>(getNatureSounds());
        dispatch<GetSounds>(getSounds());
        dispatch<GetASMRSounds>(getASMRSounds());
    }, [dispatch]);
    
    return (
        <MainStack.Navigator>
            <MainStack.Group
                screenOptions={{headerShown: false, presentation: "modal"}}
            >
            <MainStack.Screen name ="Tabs" component={MainTabNavigator} />
            <MainStack.Screen name ="Player" component={Player} />
            </MainStack.Group>
        </MainStack.Navigator>
    )
}

export default MainStackNavigator