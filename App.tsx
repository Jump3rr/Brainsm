import 'react-native-gesture-handler';
import React from 'react';

import useCachedResources from './hooks/useCachedResources';

//import store from './app/store';
//import { Provider } from 'react-redux';
import Index from './Index';


export default function App() {
  
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      //<Provider store={store}>
          <Index />
      //</Provider>
    );
  }
}
