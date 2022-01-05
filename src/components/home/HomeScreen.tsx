import React, { useEffect } from 'react';
import {Box, Text} from 'react-native-design-utility';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../constants/theme';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import { useSelector } from "react-redux";
import {IState} from "../../reducers";
import { ISoundReducer } from '../../reducers/soundsReducer';
import { IASMRReducer } from '../../reducers/asmrReducer';
import { INatureReducer } from '../../reducers/natureReducer';
import { usePlayerContext } from '../../contexts/PlayerContext';
import Ads from '../../tools/BannerAds';

const HomeScreen = () => {

    const navigation = useNavigation()
    const colors = useTheme();

    const { soundList, asmrList, natureList } = useSelector<IState, ISoundReducer & IASMRReducer & INatureReducer>((globalState) => ({
        ...globalState.sounds,
        ...globalState.asmr,
        ...globalState.nature
      }));

    const ChooseRandom = ():number => {
        const libraryLength = soundList.length + asmrList.length + natureList.length;
        const choosed = Math.floor(Math.random() * (libraryLength));
        return choosed;
    }
    const playerContext = usePlayerContext();
    let listOfAllItems: any[] = [...soundList, ...asmrList, ...natureList];

    return (
        <Box f={1} center style={styles.mainBox}>
            <Image
                style={styles.logoStyle}
                source={require('../../img/brainsmBP.png')}
            />
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('Library')}>
                    <Text bold style={{color: colors.colors.text}} center>All sounds</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('Nature')}>
                <Text bold style={{color: colors.colors.text}} center>Nature</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('People')}>
                <Text bold style={{color: colors.colors.text}} center>People</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('ASMR')}>
                <Text bold style={{color: colors.colors.text}} center>ASMR</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('Player', {data: [...soundList, ...asmrList, ...natureList][ChooseRandom()]})}>  */}
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => playerContext.play(listOfAllItems[ChooseRandom()])}>
                <Text bold style={{color: colors.colors.text}} center>Choose random sound</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('About')}>
                <Text bold style={{color: colors.colors.text}} center>About</Text>
            </TouchableOpacity>
            
        </Box>
    );
}

const styles = StyleSheet.create({
    mainBox: {
        width: '100%',
    },
    listElement: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: theme.space.sm,
        margin: theme.space.xs,
        width: '80%',
        padding: theme.space.xs,
        textAlign: 'center',
    },
    logoStyle: {
        width: 100,
        height: 100
    }
});

export default HomeScreen;