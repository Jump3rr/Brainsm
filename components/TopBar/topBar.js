import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

export default function TopBar() {
  return (
    <View style={styles.container}>
        <Link to="/">
          <Text>Back</Text>
        </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f',
    height: '10%',
    width: '100%',
    // justifyContent: 'center',
    paddingLeft: "10%",
    paddingTop: "10%"
  },
});
