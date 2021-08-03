import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import TopBar from '../TopBar/topBar';

export default function Asmr() {
  return (
    <View style={{width: "100%", height: "100%"}}>
        <TopBar />
        <View style={styles.container}>
            <Text>ASMR</Text>
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
    width: '100%',
  },
});
