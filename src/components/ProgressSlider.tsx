import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { PlayerContext } from '../contexts/PlayerContext';
import { Text, View } from './Themed';
import { ProgressComponent } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {Box} from 'react-native-design-utility';
import {theme} from '../constants/theme';
import { buildTime } from '../tools/BuildTime';

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
    <View style={{backgroundColor: 'rgba(255,255,255,0'}}>
    <Slider
        style={styles.sliderStyle}
        minimumValue={0}
        maximumValue={this.state.duration}
        step={1}
        value={this.state.position}
        onSlidingComplete={(value) => {
          this.context.goTo(value);
        }}
        minimumTrackTintColor={theme.color.greenBottled}
        maximumTrackTintColor="#f0f"
      />
      <Box dir='row' align='center' justify='between'>
        <Text style={styles.timers}>{this.currentTime}</Text>
        <Text style={styles.timers}>{this.totalTime}</Text>
      </Box>
    </View>
  );
}
}

const styles = StyleSheet.create({
  sliderStyle: {
    width: Dimensions.get('window').width/1.2,
    height: 40
  },
  timers: {
    fontSize: 25,
    color: '#fff'
  }
});
