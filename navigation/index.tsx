/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useEffect } from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
//import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import NatureLibrary from '../screens/natureLibrary';
import TabTwoScreen from '../screens/TabTwoScreen';
import MainMenu from '../screens/TabOneScreen';
import Player from '../screens/player';
import { ILibrary } from '../src/ILibrary';
import MiniPlayer from '../components/miniPlayer/MiniPlayer';
//import store from '../app/store';
//import { Provider } from 'react-redux';
//import { useDispatch } from 'react-redux';
//import { getLibrary } from '../src/actions/libraryActions';

//type GetLibrary = ReturnType<typeof getLibrary>;

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch<GetLibrary>(getLibrary());
  // }, []);


  return (
    //<Provider store={store}>
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
      <MiniPlayer />
    </NavigationContainer>
    //</Provider>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={MainMenu} />
      <Stack.Screen name="Nature" component={NatureLibrary} />
      <Stack.Screen name="TabTwo" component={TabTwoScreen} />
      <Stack.Screen name="Player" component={Player} options={({ route }) => ({ title: route?.params?.title })} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
