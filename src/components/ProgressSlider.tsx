import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { PlayerContext } from '../contexts/PlayerContext';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { ProgressComponent } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {Box} from 'react-native-design-utility';


//export default function ProgressSlider() {
function buildTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const minutesStr = String(minutes).padStart(2, '0');
  const secondsStr = String(seconds).padStart(2, '0');

  if(hours>0) {
    return `${hours}:${minutesStr}:${secondsStr}`;
  }
  else {
    return `${minutesStr}:${secondsStr}`;
  }
}

export default class ProgressSlider extends ProgressComponent {
  static contextType = PlayerContext;
  get totalTime(): string {
    return buildTime(this.state.duration-this.state.position);
  }
  get currentTime(): string {
    return buildTime(this.state.position);
  }
  
render() {
return (
    <View>
    <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={this.state.duration}
        step={1}
        value={this.state.position}
        onValueChange={(value) => {
          console.log(value);
          this.context.goTo(value);
        }}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#000000"
      />
      <Box dir='row' align='center' justify='between'>
        <Text>{this.currentTime}</Text>
        <Text>{this.totalTime}</Text>
      </Box>
    </View>
  );
}
}

const styles = StyleSheet.create({

});
