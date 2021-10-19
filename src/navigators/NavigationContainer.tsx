/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import MainStackNavigator from './MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { BrainsmDarkTheme, BrainsmDefaultTheme } from '../tools/themes';
import { getDarkMode } from '../actions/darkModeActions';
import { useSelector } from "react-redux";
import {IState} from '../reducers'
import { IDarkMode } from '../reducers/darkModeReducer';

const NavigationCon = () => {
  type GetDarkMode = ReturnType<typeof getDarkMode>;

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch<GetDarkMode>(getDarkMode());
  }, [dispatch]);

  const { isDarkModeOn } = useSelector<IState, IDarkMode>((globalState) => ({
    ...globalState.darkMode,
  }));
  return (
          <NavigationContainer theme={ isDarkModeOn ? BrainsmDarkTheme : BrainsmDefaultTheme}>
            <MainStackNavigator />
          </NavigationContainer>
  );
};

export default NavigationCon;
