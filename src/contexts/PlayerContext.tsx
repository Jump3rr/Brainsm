import React, {useState, useEffect, createContext, useContext, FC} from 'react';
import RNTrackPlayer, {STATE_NONE, STATE_PAUSED, STATE_PLAYING, STATE_STOPPED, Track, TrackPlayerEvents, State as TrackPlayerState} from 'react-native-track-player';

interface PlayerContextType {
    isPlaying: boolean;
    isPaused: boolean;
    isStopped: boolean;
    isEmpty: boolean;
    currentTrack: Track | null;
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
    play: () => null,
    pause: () => null,
    seekTo: () => null,
    goTo: () => null,
})

export const PlayerContextProvider: FC = (props) => {
    const [playerState, setPlayerState] = useState<null | TrackPlayerState>(
        null,
    );
    const [currentTrack, setCurrentTrack] = useState<null | Track>(null);

    useEffect(() => {
        const listener = RNTrackPlayer.addEventListener('playback-state', ({state}: {state: TrackPlayerState}) => {setPlayerState(state)},);
        return () => {
            listener.remove();
        }
    }, [])

    const play = async (track?: Track) => {
        if (!track) {
            if(currentTrack) {
                await RNTrackPlayer.play();
            }
            return;
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
        isPlaying: playerState === STATE_PLAYING,
        isPaused: playerState === STATE_PAUSED,
        isStopped: playerState === STATE_STOPPED,
        isEmpty: playerState === null,
        currentTrack,
        pause,
        play,
        seekTo,
        goTo
    }
        

    return (
        <PlayerContext.Provider value={value}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export const usePlayerContext = () => useContext(PlayerContext);