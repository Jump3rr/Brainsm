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
import MainStackNavigator from './src/navigators/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { BrainsmDarkTheme, BrainsmDefaultTheme } from './src/tools/themes';
import { UtilityThemeProvider } from 'react-native-design-utility';
import { theme } from './src/constants/theme';
import TrackPlayer, {Capability} from 'react-native-track-player';
import { Box } from 'react-native-design-utility';
import { ActivityIndicator } from 'react-native';
import { PlayerContextProvider } from './src/contexts/PlayerContext';
import store from './src/tools/store';
import { Provider } from 'react-redux';
import NavigationCon from './src/navigators/NavigationContainer';
import { AdsConsent, AdsConsentStatus  } from '@react-native-firebase/admob';

const App = () => {
  const [isReady, setIsReady] = useState<Boolean>(true);
  const EUC = async() => { 
    const consentInfo = await AdsConsent.requestInfoUpdate(['pub-9930822065651705']);

    if (
      consentInfo.isRequestLocationInEeaOrUnknown &&
      consentInfo.status === AdsConsentStatus.UNKNOWN
    ) {
      const formResult = await AdsConsent.showForm({
        privacyPolicy: 'https://invertase.io/privacy-policy',
        withPersonalizedAds: true,
        withNonPersonalizedAds: true,
      });

      if (formResult.userPrefersAdFree) {
        // Handle the users request, e.g. redirect to a paid for version of the app
      }
      
      // The user requested non-personalized or personalized ads
      const status = formResult.status;
    }
  }

  useEffect(() => {
      TrackPlayer.setupPlayer()
      .then(() => {
        //TrackPlayer.registerPlaybackService(() => trackPlayerServices);
        TrackPlayer.updateOptions({
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.Stop,
            Capability.JumpForward,
            Capability.JumpBackward,
          ],
          forwardJumpInterval: 10,
          backwardJumpInterval: 10,
          compactCapabilities: [Capability.Play, Capability.Pause],
        })
        EUC();
        setIsReady(true);
      })
  },[]);

  return (
    <UtilityThemeProvider theme={theme}>
      <Provider store={store}>
        {isReady ? (
        <PlayerContextProvider>
          <NavigationCon />
          {/* <NavigationContainer theme={ isDarkMode ? BrainsmDarkTheme : BrainsmDefaultTheme}>
            <MainStackNavigator />
          </NavigationContainer> */}
        </PlayerContextProvider>
        ) : (
          <Box f={1} center>
            <ActivityIndicator />
          </Box>
        )}
      </Provider>
    </UtilityThemeProvider>
  );
};

export default App;
