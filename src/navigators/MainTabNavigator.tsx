import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/home/HomeScreen';
import SearchScreen from '../components/search/SearchScreen';
import LibraryScreen from '../components/library/LibraryScreen';

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
            <HomeStack.Screen name="Hom" options={{title: "Brainsm"}} component={HomeScreen} />
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
            <SearchStack.Screen name="Search" component={SearchScreen} />
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
            <LibraryStack.Screen name="Library" component={LibraryScreen} />
            </LibraryStack.Group>
        </LibraryStack.Navigator>
    )
}

const MainTabNavigator = () => {
    return (
        <MainTab.Navigator>
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