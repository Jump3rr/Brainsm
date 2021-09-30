import React from 'react';
import { StyleSheet } from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { theme } from '../../constants/theme';
import KeyboardDismissView from '../KeyboardDismissView';
import { useSelector } from "react-redux";
import {IState} from "../../reducers";
import { ISoundReducer } from '../../reducers/soundsReducer';

const SearchScreen = () => {

    const { soundList } = useSelector<IState, ISoundReducer>((globalState) => ({
        ...globalState.sounds,
      }));

    return (
        <KeyboardDismissView>
            <Box f={1} bg="white">
                <Box h={50} w="100%" px="sm" my="sm">
                    <TextInput style={styles.input} placeholder="Search..." selectionColor={theme.color.greenLighter} />
                </Box>
                {soundList.length > 0 &&
                    <FlatList style={styles.list} data={soundList} renderItem={({item}) => (
                        <Box h={90} p="xs" dir="row" align="center">
                            <Box h={70} w={70} bg="blue" radius={10} mr={10} />
                            <Box>
                                <Text bold>{item.title}</Text>
                                <Text size="sm">{item.duration}</Text>
                            </Box>
                        </Box>
                    )} keyExtractor={(item) => String(item.title)} />
                }
            </Box>
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
    }
});
export default SearchScreen;