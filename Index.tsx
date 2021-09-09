import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import TrackPlayer from 'react-native-track-player';
import { Box } from 'react-native-design-utility';
import { ActivityIndicator } from 'react-native';
import { PlayerContextProvider } from './src/contexts/PlayerContext';

export default function App() {
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
      // await TrackPlayer.add(library);
      // await TrackPlayer.play();

      // setTimeout(() => {
      //   TrackPlayer.stop();
      // }, 2000);
  },[]);

   const colorScheme = useColorScheme();

    return (
      <SafeAreaProvider>
        {isReady ? (
          <PlayerContextProvider>
            <Navigation colorScheme={colorScheme} />
          </PlayerContextProvider>
        )
        : (
        <Box f={1} center>
          <ActivityIndicator />
        </Box>
        )}
        <StatusBar />
      </SafeAreaProvider>
    );
}
