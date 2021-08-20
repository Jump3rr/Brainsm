import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';
// import {name as appName} from './app.json';

import App from './App';
import Player from './screens/player';

AppRegistry.registerComponent('main', () => App);
TrackPlayer.registerPlaybackService(() => require("./service.js"))

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
//registerRootComponent(App);
