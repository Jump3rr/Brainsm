import React, { Dispatch, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

const setSoundsLoading = (message: any) => ({
    type: "SET_SOUNDS_LOADING",
    payload: message,
  });

export const setSounds = (data: any) => ({
    type: "GET_SOUNDS",
    payload: data,
})

export const getSounds = () => (dispatch: Dispatch<any>) => {
  const arr: any[] = [];
  dispatch(setSoundsLoading(true));

  return firestore()
  .collection('sounds')
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      arr.push(documentSnapshot.data());
    });
  })
  .then(() => {
      dispatch(setSounds(arr))
  })
}