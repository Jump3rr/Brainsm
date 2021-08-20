import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import { Text, View,  } from '../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import * as customData from '../src/data';
import { ILibrary } from '../src/ILibrary';
import { InitialProps } from 'expo/build/launch/withExpoRoot.types';

export default function Player({route, navigation}:any) {//:StackScreenProps<RootStackParamList, 'Player'>) {

  const sound = route.params;
  const start = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add({
          id: String(sound.sound.id),
          url: sound.sound.sound,
          title: sound.sound.title,
          artist: sound.sound.artist
      });
      await TrackPlayer.play();
  }
  const stop = async () => {
    await TrackPlayer.stop();
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text>{sound.title}</Text>
      </View>
      <View style={styles.container}>
      <TouchableOpacity onPress={start}>
        <Text style={styles.singleSound}>PLAY</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stop}>
        <Text style={styles.singleSound}>STOP</Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    </View>

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
