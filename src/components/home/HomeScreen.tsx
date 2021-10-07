import React, { useEffect } from 'react';
import {Box, Text} from 'react-native-design-utility';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../constants/theme';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation()
    const colors = useTheme();
    return (
        <Box f={1} center style={styles.mainBox}>
            <Text bold size="xl" mb="xl" style={{color: colors.colors.text}}>LOGO</Text>
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('Search')}>
                    <Text bold style={{color: colors.colors.text}} center>All sounds</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('Search')}>
                <Text bold style={{color: colors.colors.text}} center>Nature</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('Search')}>
                <Text bold style={{color: colors.colors.text}} center>People</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('Search')}>
                <Text bold style={{color: colors.colors.text}} center>ASMR</Text>
            </TouchableOpacity>
            {/* przenoszenie do funkcji ktora losuje liczbe z zakresu reduxa a nastepnie przenosi do playera z odpowiednimi parametrami */}
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('Library')}> 
                <Text bold style={{color: colors.colors.text}} center>Choose random sound</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listElement, {borderColor: colors.colors.text}]} onPress={() => navigation.navigate('Library')}>
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
});

export default HomeScreen;