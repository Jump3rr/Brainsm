// import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
// import * as React from 'react';
// import { StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
// import { Text, View,  } from '../components/Themed';
// import { StackScreenProps } from '@react-navigation/stack';
// import { RootStackParamList } from '../types';
// import MiniPlayer from '../components/miniPlayer/MiniPlayer';

// export default function MainMenu({navigation}:StackScreenProps<RootStackParamList, 'TabOne'>) {

//   const pressHandlerNature = () => {
//     navigation.navigate('Nature');
//   }

//   const pressHandlerAsmr = () => {
//     //navigation.navigate('Player');
//     navigation.navigate('Nature');
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.topBar}>
//           <Text>ICON</Text>
//       </View>
//       <View style={styles.container}>
//       <TouchableOpacity onPress={pressHandlerAsmr}>
//         <Text style={styles.singleSound}>ASMR</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={pressHandlerNature}>
//         <Text style={styles.singleSound}>Nature</Text>
//       </TouchableOpacity>
//       {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
//       </View>
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   topBar: {
//     height: 100,
//     width: '100%',
//     backgroundColor: '#f0f0f0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   singleSound: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     borderColor: 'black',
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
