import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import * as React from 'react';
//import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
// import { useSelector } from 'react-redux';
// import { IState } from '../src/reducers';
// import { ILibraryReducer } from '../src/reducers/libraryReducer';
// import { useDispatch } from 'react-redux';
//import { getLibrary } from '../src/actions/libraryActions';
import * as customData from '../src/data.json';
import { ILibrary } from '../src/ILibrary';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabOneScreen from '../screens/TabOneScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { TabTwoParamList } from '../types';


export default function CurrentPlayer({navigation}:any) {

  const pressHandler = () => {
    navigation.navigate('TabTwo');
  }

  return (
    <View style={styles.container}>
      {customData?.library?.length > 0 &&
      customData?.library?.map((el) => {
        return (
        <TouchableOpacity onPress={pressHandler} key={el.id-20}>
          <Text style={styles.singleSound} key={el.id}>{el?.title}</Text>
        </TouchableOpacity>
        )
      })
      }
      <Text style={styles.singleSound}></Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
