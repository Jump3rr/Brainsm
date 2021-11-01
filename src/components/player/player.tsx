import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import { StackScreenProps } from '@react-navigation/stack';
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native'; 
import { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import ProgressSlider from '../ProgressSlider';
import { PlayerContext, usePlayerContext } from '../../contexts/PlayerContext';
import { NavigationProp, useRoute, RouteProp, useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../constants/theme';

export default function Player() {
  const playerContext = usePlayerContext();
  const navigation = useNavigation();
  //const sound = route?.params.data;
  const track = playerContext.currentTrack;
  if (!track) {
    return null;
  }

  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{bottom: 20, top:20, left: 20, right:20}}>
        <Icon name="chevron-down" size={30} />
      </TouchableOpacity>
      <Box style={styles.container}>
      <Image
        style={styles.images}
        source={{uri: track.artwork}}
      />
      <Box style={styles.topBar}>
        <Text size={28} bold>{track.title}</Text>
      </Box>
        <Box style={styles.playerButtons}>
          <TouchableOpacity onPress={() => playerContext.pause()}>
            <Icon name="step-backward" size={40} style={styles.icons} />
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
          <TouchableOpacity onPress={() => playerContext.pause()}>
            <Icon name="step-forward" size={40} style={styles.icons} />
          </TouchableOpacity>
        </Box>
        <ProgressSlider />
        {/* <Box style={styles.separator} /> */}
      </Box>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  main: {
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
  images: {
    width: 250,
    height: 250,
    marginBottom: 5,
    marginTop: -30
  }
});
