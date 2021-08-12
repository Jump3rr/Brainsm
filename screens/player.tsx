import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Text, View,  } from '../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import TrackPlayer from 'react-native-track-player';
import * as customData from '../src/data.json';


export default function Player({navigation}:StackScreenProps<RootStackParamList, 'Player'>) {

  const start = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add({
        //   id: String(customData?.library[0]?.id),
        //   url: customData?.library[0]?.sound,
        //   title: customData?.library[0]?.title,
        //   artist: customData?.library[0]?.artist
        id: '1',
        url: require('../src/sounds/waves.mp3'),
        title: 'Waves',
        artist: ',sd'
      });
      await TrackPlayer?.play();
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
          <Text>PLAYER</Text>
      </View>
      <View style={styles.container}>
      <TouchableOpacity onPress={start}>
        <Text style={styles.singleSound}>ASMR</Text>
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
