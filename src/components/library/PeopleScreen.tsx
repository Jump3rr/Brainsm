import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Box, Text } from 'react-native-design-utility';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { theme } from '../../constants/theme';
import KeyboardDismissView from '../KeyboardDismissView';
import { useSelector } from "react-redux";
import {IState} from "../../reducers";
import { ISoundReducer } from '../../reducers/soundsReducer';
import { useTheme } from '@react-navigation/native';
import { usePlayerContext } from '../../contexts/PlayerContext';
import { buildTime } from '../../tools/BuildTime';
import EmptyList from '../EmptyList';
import BannerAds from '../../tools/BannerAds';
import InterstitialAds from '../../tools/InterstitialAds';

const PeopleScreen = () => {

    const colors = useTheme();
    const { soundList } = useSelector<IState, ISoundReducer>((globalState) => ({
        ...globalState.sounds,
      }));
    const playerContext = usePlayerContext();

    return (
        <KeyboardDismissView>
            <Box f={1}>
                {/* <Box h={50} w="100%" px="sm" my="sm">
                    <TextInput style={styles.input} placeholder="Search..." selectionColor={theme.color.greenLighter} />
                </Box> */}
                {soundList.length > 0 &&
                    <FlatList style={styles.list} data={soundList} renderItem={({item}) => (
                        <TouchableOpacity onPress={() => playerContext.play(item)}>
                        <Box h={90} p="xs" dir="row" align="center">
                        <Image
                            style={styles.images}
                            source={{uri: item.artwork}}
                        />
                            <Box>
                                <Text bold style={{color: colors.colors.text}}>{item.title}</Text>
                                <Text size="sm" style={{color: colors.colors.border}}>{buildTime(item.duration)}</Text>
                            </Box>
                        </Box>
                        </TouchableOpacity>
                    )} keyExtractor={(item) => String(item.title)} />
                }
                {!(soundList.length > 0) && 
                <EmptyList />
                }
            </Box>
            {InterstitialAds()}
            <BannerAds />
        </KeyboardDismissView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        flex: 1,
        backgroundColor: theme.color.greyLightest,
        paddingHorizontal: theme.space.sm,
        borderRadius: 10,
        fontSize: theme.text.size.md
    },
    list: {
        minHeight: '100%',
    },
    images: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 10
    }
});
export default PeopleScreen;