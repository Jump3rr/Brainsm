import React, { useEffect } from 'react';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { collection, getDocs } from "firebase/firestore"; 
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  import firestore from '@react-native-firebase/firestore';

const HomeScreen = () => {
const usersCollection = firestore().collection('sounds');
firestore()
  .collection('sounds')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });
// const firebaseConfig = {
//   apiKey: "AIzaSyADOzA3N4_oPnq27cMLJR544vuoG_VybWk",
//   authDomain: "brainsmdb.firebaseapp.com",
//   projectId: "brainsmdb",
//   storageBucket: "brainsmdb.appspot.com",
//   messagingSenderId: "27936881784",
//   appId: "1:27936881784:web:4135105931eeaa93fe418d",
//   measurementId: "G-JWQR39R32S"
// };


// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

// const doIt = async () => {
//     console.log(new Date());
//   const querySnapshot = await getDocs(collection(db, "sounds"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
// }
// doIt();

    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}
export default HomeScreen;