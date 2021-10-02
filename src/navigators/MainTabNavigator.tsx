import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/home/HomeScreen';
import SearchScreen from '../components/search/SearchScreen';
import LibraryScreen from '../components/library/LibraryScreen';
import Player from '../components/player/player';
import {Box, Text} from 'react-native-design-utility';
import MiniPlayer from '../components/miniPlayer/MiniPlayer';

const MainTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Group
                screenOptions={{ }}
            >
            <HomeStack.Screen name="HomeStack" options={{title: "Brainsm"}} component={HomeScreen} />
            </HomeStack.Group>
        </HomeStack.Navigator>
    )
}
const SearchStackNavigator = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Group
                screenOptions={{ }}
            >
            <SearchStack.Screen name="SearchStack" options={{title: "Brainsm"}} component={SearchScreen} />
            <SearchStack.Screen name="Player" options={{title: "Player"}} component={Player} />
            </SearchStack.Group>
        </SearchStack.Navigator>
    )
}
const LibraryStackNavigator = () => {
    return (
        <LibraryStack.Navigator>
            <LibraryStack.Group
                screenOptions={{ }}
            >
            <LibraryStack.Screen name="LibraryStack" options={{title: "Brainsm"}} component={LibraryScreen} />
            </LibraryStack.Group>
        </LibraryStack.Navigator>
    )
}

const MainTabNavigator = () => {
    return (
        <MainTab.Navigator tabBar={(tabsProps)=> (
            <>
                <MiniPlayer />
                <BottomTabBar {...tabsProps} />
            </>
        )}>
            <MainTab.Group
                screenOptions={{headerShown: false}}
            >
                <MainTab.Screen name="Home" component={HomeStackNavigator} />
                <MainTab.Screen name="Search" component={SearchStackNavigator} />
                <MainTab.Screen name="Library" component={LibraryStackNavigator} />
            </MainTab.Group>
        </MainTab.Navigator>
    )
}

export default MainTabNavigator;