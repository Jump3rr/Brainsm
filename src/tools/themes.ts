import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const BrainsmDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      //primary: 'rgb(255, 45, 85)',
      primary: 'rgb(250, 212, 219)',
      background: 'rgb(250, 212, 219)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(50, 102, 71)',
      border: 'rgb(50, 102, 71)',
      notification: 'rgb(255, 59, 48)',
    },
  };

export const BrainsmDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: 'rgb(250, 212, 219)',
      //card: 'rgb(250, 212, 219)',
      text: 'rgb(250, 212, 219)',
      border: 'rgb(50, 102, 71)',
      notification: 'rgb(255, 59, 48)',
    },
  };