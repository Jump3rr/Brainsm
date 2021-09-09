import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import TrackPlayer from 'react-native-track-player';
import trackPlayerServices from './src/service';

AppRegistry.registerComponent('main', () => App);
TrackPlayer.registerPlaybackService(() => require('./src/service'),);
