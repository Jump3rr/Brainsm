import React, {useState, useEffect, createContext, useContext, FC} from 'react';
import RNTrackPlayer, { Track, State as TrackPlayerState, usePlaybackState } from 'react-native-track-player';


interface PlayerContextType {
    isPlaying: boolean;
    isPaused: boolean;
    isStopped: boolean;
    isEmpty: boolean;
    currentTrack: Track | null;
    interval: any;
    play: (track?: Track) => void;
    pause: () => void;
    seekTo: (amount?: number) => void;
    goTo: (amount: number) => void;
}

export const PlayerContext = createContext<PlayerContextType>({
    isPlaying: false,
    isPaused: false,
    isStopped: false,
    isEmpty: true,
    currentTrack: null,
    interval: null,
    play: () => null,
    pause: () => null,
    seekTo: () => null,
    goTo: () => null,
})

export const PlayerContextProvider: FC = (props) => {
    
    const playerState = usePlaybackState();
    const [currentTrack, setCurrentTrack] = useState<null | Track>(null);
    

    const setupIfNecessary = async () => {
        const currentTrack = await RNTrackPlayer.getCurrentTrack();
        if (currentTrack !== null) {
          return;
        }

    }
        
    useEffect(() => {
        setupIfNecessary();
    }, [])

    const play = async (track?: Track) => {
        if (!track) {
            if(currentTrack) {
                await RNTrackPlayer.play();
            }
            return;
        }

        if(currentTrack && track.title !== currentTrack.title) {
            await RNTrackPlayer.reset();
        }

        await RNTrackPlayer.add([track]);
        setCurrentTrack(track)
        await RNTrackPlayer.play();
    }

    const pause = async () => {
        await RNTrackPlayer.pause();
    }

    const seekTo = async (amount = 30) => {
        const position = await RNTrackPlayer.getPosition();
        await RNTrackPlayer.seekTo(position + amount);
    };
    
    const goTo = async (amount: number) => {
        await RNTrackPlayer.seekTo(amount);
    };

    const value: PlayerContextType = {
        isPlaying: playerState === TrackPlayerState.Playing,
        isPaused: playerState === TrackPlayerState.Paused,
        isStopped: playerState === TrackPlayerState.Stopped,
        isEmpty: playerState === null,
        interval: null,
        currentTrack,
        pause,
        play,
        seekTo,
        goTo,
    }
        

    return (
        <PlayerContext.Provider value={value}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export const usePlayerContext = () => useContext(PlayerContext);