import { Dispatch } from 'react';
import firestore from '@react-native-firebase/firestore';

const setASMRSoundsLoading = (message: any) => ({
    type: "SET_ASMR_SOUNDS_LOADING",
    payload: message,
  });

export const setASMRSounds = (data: any) => ({
    type: "GET_ASMR_SOUNDS",
    payload: data,
})

export const getASMRSounds = () => (dispatch: Dispatch<any>) => {
  const arr: any[] = [];
  dispatch(setASMRSoundsLoading(true));

  return firestore()
  .collection('asmr')
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      arr.push(documentSnapshot.data());
    });
  })
  .then(() => {
      dispatch(setASMRSounds(arr))
  })
}