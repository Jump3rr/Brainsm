import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch, Link } from "react-router-native";
import Nature from './components/Nature/nature';
import Asmr from './components/Asmr/asmr';
import HomePage from './components/HomePage/homePage';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/nature" component={Nature} />
          <Route exact path="/asmr" component={Asmr} />
        </Switch>
        <StatusBar style="auto" />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
