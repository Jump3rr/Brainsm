/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useEffect, useState} from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import { DarkTheme, NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { UtilityThemeProvider } from 'react-native-design-utility';
import { theme } from './src/constants/theme';
import TrackPlayer from 'react-native-track-player';
import { Box } from 'react-native-design-utility';
import { ActivityIndicator } from 'react-native';
import { PlayerContextProvider } from './src/contexts/PlayerContext';
import store from './src/tools/store';
import { Provider } from 'react-redux';

const App = () => {
  const [isReady, setIsReady] = useState<Boolean>(true);

  useEffect(() => {
      TrackPlayer.setupPlayer()
      .then(() => {
        //TrackPlayer.registerPlaybackService(() => trackPlayerServices);
        TrackPlayer.updateOptions({
          capabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            TrackPlayer.CAPABILITY_STOP,
            TrackPlayer.CAPABILITY_JUMP_FORWARD,
            TrackPlayer.CAPABILITY_JUMP_BACKWARD,
          ],
          jumpInterval: 30,
        })
        setIsReady(true);
      })
  },[]);


  const BrainsmDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(250, 212, 219)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(50, 102, 71)',
      border: 'rgb(50, 102, 71)',
      notification: 'rgb(255, 59, 48)'
    },
  };

  const BrainsmDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: 'rgb(255, 45, 85)',
      //card: 'rgb(250, 212, 219)',
      text: 'rgb(50, 102, 71)',
      border: 'rgb(50, 102, 71)',
      notification: 'rgb(255, 59, 48)',
    },
  };

  return (
    <UtilityThemeProvider theme={theme}>
      <Provider store={store}>
        {isReady ? (
        <PlayerContextProvider>
          <NavigationContainer theme={BrainsmDefaultTheme}>
            <MainStackNavigator />
          </NavigationContainer>
        </PlayerContextProvider>
        ) : (
          <Box f={1} center>
            <ActivityIndicator />
          </Box>
        )}
        {/* <NavigationContainer theme={BrainsmDefaultTheme}>
          <MainStackNavigator />
        </NavigationContainer> */}
      </Provider>
    </UtilityThemeProvider>
  );
};

export default App;
