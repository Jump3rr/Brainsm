import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import seekTo from 'react-native-track-player';
import { PlayerContext } from '../../contexts/PlayerContext';
import { usePlayerContext } from '../../contexts/PlayerContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../constants/theme';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';

const MiniPlayer = () => {
    const playerContext = usePlayerContext();
    const navigation = useNavigation();
    const colors = useTheme();

    if(playerContext.isEmpty || !playerContext.currentTrack) {
        return null;
    }
    const styles = StyleSheet.create({
        photo: {
          width: 50,
          height: 50,
          marginRight: 10,
          borderRadius: 20,
        },
        icons: {
            color: colors.colors.text,
            marginHorizontal: 15,
        },
    });

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Player')}>
        <Box h={75} bg={colors.colors.background} px='sm' style={{borderTopWidth: 1, borderTopColor: colors.colors.text}}>
            <Box f={1} dir='row' align='center' justify='between'>
            <Image
                style={styles.photo}
                source={{uri: playerContext.currentTrack.artwork}}
            />
                <Box f={1} mr={10}>
                    <Text color={colors.colors.text} numberOfLines={1}>{playerContext.currentTrack.title}</Text>
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
                            <Text color={colors.colors.text}>Stop</Text>
                        </TouchableOpacity>
                    )}
                </Box>
                <Box>
                    <TouchableOpacity onPress={() => playerContext.seekTo()}>
                        <Text color={colors.colors.text}>Forward</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Box>
        </TouchableOpacity>
    )
}

export default MiniPlayer;