// import * as React from 'react';
// import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
// import { RootStackParamList } from '../types';
// import EditScreenInfo from '../EditScreenInfo';
// import { Text, View } from '../Themed';

// export default function TabTwoScreen({navigation}:StackScreenProps<RootStackParamList, 'TabTwo'>) {

//   const pressHandlerBack = () => {
//     navigation.navigate('Nature');
//   }
//   const pressHandlerHome = () => {
//     navigation.navigate('Root');
//   }

//   return (
//     <View style={styles.container}>
//         <View style={styles.topBar}>
//           <TouchableOpacity onPress={pressHandlerBack}>
//               <Text>BACK</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={pressHandlerHome}>
//               <Text>HOME</Text>
//           </TouchableOpacity>
//           </View>
//       <View style={styles.container}>
//         <Text style={styles.title}>Tab Two</Text>
//         <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//         <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
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
//     flexDirection: 'row',
//     flexWrap: 'nowrap',
//     backgroundColor: '#f0f0f0',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
