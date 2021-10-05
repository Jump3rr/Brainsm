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
      {/* <TouchableOpacity onPress={() => playerContext.play(sound)}> 
        <Text style={styles.singleSound}>PLAY</Text> */}
        <Icon name="play" size={30} style={{color: '#fff'}} />
      {/* </TouchableOpacity> */}
      <TouchableOpacity onPress={() => playerContext.pause()}>
        <Text style={styles.singleSound}>STOP</Text>
      </TouchableOpacity>
      <ProgressSlider />
      <Box style={styles.separator} />
      </Box>
      <Icon name="stop" size={30}/>
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
});
