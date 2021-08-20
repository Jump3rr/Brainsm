import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import * as React from 'react';
//import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as customData from '../src/data';
import { ILibrary } from '../src/ILibrary';

export default function NatureLibrary({navigation}:StackScreenProps<RootStackParamList, 'Nature'>) {

  // const pressHandler = (sound: ILibrary) => {
  //   navigation.navigate('Player');
  // }
  const pressHandlerHome = () => {
    navigation.navigate('Root');

  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <SafeAreaView>
        <TouchableOpacity onPress={pressHandlerHome}>
            <Text>BACK</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View style={styles.container}>
        {customData?.default?.length > 0 &&
        customData?.default?.map((el) => {
          return (
          <TouchableOpacity onPress={() => navigation.navigate('Player', {
            sound: el,
            title: el.title,
          })} key={el.id-20}>
            <Text style={styles.singleSound} key={el.id}><Image style={styles.photo} source={el?.img} /> {el?.title}</Text>
          </TouchableOpacity>
          )
        })
        }
        <Text style={styles.singleSound}></Text>
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
  singleSound: {
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  topBar: {
    height: 100,
    width: '100%',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  photo: {
    width: 50,
    height: 50
  }
});
