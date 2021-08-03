import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route, Link } from "react-router-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
    
      <Text>HOME</Text>
      
      <Link to="/asmr" style={styles.buttons}><Text>ASMR</Text></Link>
      <Link to="/nature" style={styles.buttons}><Text>NATURE</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },

  buttons: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: '80%',
    margin: 10,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
