import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/home/HomeScreen';
import AboutScreen from '../components/about/AboutScreen';
import LibraryScreen from '../components/library/LibraryScreen';
import NatureScreen from '../components/library/NatureScreen';
import PeopleScreen from '../components/library/PeopleScreen';
import Player from '../components/player/player';
import {Box, Text} from 'react-native-design-utility';
import MiniPlayer from '../components/miniPlayer/MiniPlayer';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import ASMRScreen from '../components/library/ASMRScreen';

const MainTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const iconSize = 24;

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Group
                screenOptions={{ }}
            >
            <HomeStack.Screen name="HomeStack" options={{title: "Brainsm"}} component={HomeScreen} />
            <HomeStack.Screen name="Nature" options={{title: "Brainsm"}} component={NatureScreen} />
            <HomeStack.Screen name="ASMR" options={{title: "Brainsm"}} component={ASMRScreen} />
            <HomeStack.Screen name="People" options={{title: "Brainsm"}} component={PeopleScreen} />
            <HomeStack.Screen name="Player" options={{title: "Player"}} component={Player} />
            </HomeStack.Group>
        </HomeStack.Navigator>
    )
}
const LibraryStackNavigator = () => {
    return (
        <LibraryStack.Navigator>
            <LibraryStack.Group
                screenOptions={{ }}
            >
            <LibraryStack.Screen name="LibraryStack" options={{title: "Brainsm"}} component={LibraryScreen} />
            <LibraryStack.Screen name="Player" options={{title: "Player"}} component={Player} />
            </LibraryStack.Group>
        </LibraryStack.Navigator>
    )
}
const AboutStackNavigator = () => {
    return (
        <AboutStack.Navigator>
            <AboutStack.Group
                screenOptions={{ }}
            >
            <AboutStack.Screen name="AboutStack" options={{title: "About"}} component={AboutScreen} />
            </AboutStack.Group>
        </AboutStack.Navigator>
    )
}

const MainTabNavigator = () => {
    const colors = useTheme();

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
                <MainTab.Screen name="Home" component={HomeStackNavigator} options={{tabBarIcon: (props) => <FeatherIcon name="home" size={iconSize} color={props.color} />}} />
                <MainTab.Screen name="Library" component={LibraryStackNavigator} options={{tabBarIcon: (props) => <FeatherIcon name="book-open" size={iconSize} color={props.color} />}}/>
                <MainTab.Screen name="About" component={AboutStackNavigator} options={{tabBarIcon: (props) => <FeatherIcon name="more-horizontal" size={iconSize} color={props.color} />}}/>
            </MainTab.Group>
        </MainTab.Navigator>
    )
}

export default MainTabNavigator;