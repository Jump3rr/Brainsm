import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import seekTo from 'react-native-track-player';
import { PlayerContext } from '../../contexts/PlayerContext';
import { usePlayerContext } from '../../contexts/PlayerContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../constants/theme';

const MiniPlayer = () => {
    const playerContext = usePlayerContext();

    if(playerContext.isEmpty || !playerContext.currentTrack) {
        return null;
    }

    return (
        <Box h={75} bg='white' px='sm' style={{borderTopWidth: 1, borderTopColor: 'lightgrey'}}>
            <Box f={1} dir='row' align='center' justify='between'>
            <Image
                style={styles.photo}
                source={{uri: playerContext.currentTrack.artwork}}
            />
                <Box f={1} mr={10}>
                    <Text numberOfLines={1}>{playerContext.currentTrack.title}</Text>
                </Box>
                <Box>
                    {playerContext.isPaused && (
                        <TouchableOpacity onPress={() => playerContext.play()}>
                            <Icon name="play" size={35} style={styles.icons} />
                        </TouchableOpacity>
                    )}
                    {playerContext.isPlaying && (
                        <TouchableOpacity onPress={() => playerContext.pause()}>
                            <Icon name="pause" size={35} style={styles.icons} />
                        </TouchableOpacity>
                    )}
                    {playerContext.isStopped && (
                        <TouchableOpacity onPress={() => null}>
                            <Text>Stop</Text>
                        </TouchableOpacity>
                    )}
                </Box>
                <Box>
                    <TouchableOpacity onPress={() => playerContext.seekTo()}>
                        <Text>Forward</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    photo: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderRadius: 20,
    },
    icons: {
        color: theme.color.black,
        marginHorizontal: 15,
    },
});

export default MiniPlayer;