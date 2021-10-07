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
import { NavigationProp, useRoute, RouteProp } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../constants/theme';

export default function Player({route, navigation}:any) {
  const playerContext = usePlayerContext();
  
  const sound = route?.params.data;

  return (
    <Box style={styles.container}>
      <Box style={styles.topBar}>
        <Text>{sound.title}</Text>
        {console.log(sound)}
      </Box>
      <Box style={styles.container}>
      <Image
        style={styles.images}
        source={{uri: sound.artwork}}
      />
        <Box style={styles.playerButtons}>
          <TouchableOpacity onPress={() => playerContext.pause()}>
            <Icon name="step-backward" size={40} style={styles.icons} />
          </TouchableOpacity>
          {!playerContext.isPlaying && (
          <TouchableOpacity onPress={() => playerContext.play(sound)}> 
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
    </Box>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    height: 100,
    width: '100%',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 200,
    height: 200,
    marginBottom: 30
  }
});
