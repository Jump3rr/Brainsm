import { Dispatch } from 'react';
import firestore from '@react-native-firebase/firestore';

const setNatureSoundsLoading = (message: any) => ({
    type: "SET_NATURE_SOUNDS_LOADING",
    payload: message,
  });

export const setNatureSounds = (data: any) => ({
    type: "GET_NATURE_SOUNDS",
    payload: data,
})

export const getNatureSounds = () => (dispatch: Dispatch<any>) => {
  const arr: any[] = [];
  dispatch(setNatureSoundsLoading(true));

  return firestore()
  .collection('nature')
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      arr.push(documentSnapshot.data());
    });
  })
  .then(() => {
      dispatch(setNatureSounds(arr))
  })
}