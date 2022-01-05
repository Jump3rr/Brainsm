import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';
import { useState } from 'react';
import ProgressSlider from '../ProgressSlider';
import { usePlayerContext } from '../../contexts/PlayerContext';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
import { theme } from '../../constants/theme';
import BannerAds from '../../tools/BannerAds';

export default function Player() {
  const playerContext = usePlayerContext();
  const navigation = useNavigation();
  const track = playerContext.currentTrack;
  if (!track) {
    return null;
  }

  const [isLooped, setLooped] = useState(false);

  const ChangeLoopMode = () => {
    setLooped(!isLooped);

    if(isLooped) {
      TrackPlayer.setRepeatMode(RepeatMode.Off)
    }
    else {
      TrackPlayer.setRepeatMode(RepeatMode.Track)
    }
  }

  return (
    <SafeAreaView style={styles.main}>
      <Box style={styles.mainBox}>
      <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{bottom: 20, top:20, left: 20, right:20}}>
        <Icon name="chevron-down" size={30} color={'white'} />
      </TouchableOpacity>
      <Box style={styles.container}>
      <Image
        style={styles.images}
        source={{uri: track.artwork}}
      />
      <Box style={styles.topBar}>
        <Text size={28} bold color='white'>{track.title}</Text>
      </Box>
        <Box style={styles.playerButtons}>
          <TouchableOpacity onPress={() => playerContext.seekTo(-10)}>
            <Icon2 name="replay-10" size={40} style={styles.icons} />
          </TouchableOpacity>
          {!playerContext.isPlaying && (
          <TouchableOpacity onPress={() => playerContext.play(track)}> 
            <Icon name="play" size={60} style={styles.icons} />
          </TouchableOpacity>
          )}
          {playerContext.isPlaying && (
          <TouchableOpacity onPress={() => playerContext.pause()}>
            <Icon name="pause" size={60} style={styles.icons} />
          </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => playerContext.seekTo(10)}>
            <Icon2 name="forward-10" size={40} style={styles.icons} />
          </TouchableOpacity>
          {!isLooped && (
          <TouchableOpacity onPress={() => ChangeLoopMode()}>
            <Icon3 name="loop" size={40} style={styles.icons} />
          </TouchableOpacity>
          )}
          {isLooped && (
          <TouchableOpacity onPress={() => ChangeLoopMode()}>
          {/* <TouchableOpacity onPress={() => playerContext.changeLoopMode()}> */}
            <Icon3 name="loop" size={40} style={styles.iconsOn} />
          </TouchableOpacity>
          )}
        </Box>
        <ProgressSlider />
        {/* <Box style={styles.separator} /> */}
      </Box>
      </Box>
      <BannerAds />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  mainBox: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  },
  singleSound: {
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  playerButtons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icons: {
    color: theme.color.white,
    marginHorizontal: 15,
  },
  iconsOn: {
    color: theme.color.green,
    marginHorizontal: 15,
  },
  images: {
    width: 250,
    height: 250,
    marginBottom: 5,
    marginTop: -30
  }
});
