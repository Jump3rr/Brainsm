import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
//import { useDispatch } from 'react-redux';
//import { getLibrary } from './src/actions/libraryActions';

//type GetLibrary = ReturnType<typeof getLibrary>;

export default function App() {


  //  const dispatch = useDispatch();
  //  useEffect(() => {
  //      dispatch<GetLibrary>(getLibrary());
  //  }, []);

   const colorScheme = useColorScheme();

    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
}
