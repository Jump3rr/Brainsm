import React, { useEffect } from 'react';
import {Box, Text} from 'react-native-design-utility';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../constants/theme';
import { useNavigation } from '@react-navigation/core';

const HomeScreen = () => {

    const navigation = useNavigation()
    return (
        <Box f={1} center style={styles.mainBox}>
            <Text bold size="xl" mb="xl">LOGO</Text>
            <TouchableOpacity style={styles.listElement} onPress={() => navigation.navigate('Search')}>
                    <Text bold style={styles.mainFont} center>All sounds</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listElement} onPress={() => navigation.navigate('Search')}>
                <Text bold style={styles.mainFont} center>Nature</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listElement} onPress={() => navigation.navigate('Search')}>
                <Text bold style={styles.mainFont} center>People</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listElement} onPress={() => navigation.navigate('Search')}>
                <Text bold style={styles.mainFont} center>ASMR</Text>
            </TouchableOpacity>
            {/* przenoszenie do funkcji ktora losuje liczbe z zakresu reduxa a nastepnie przenosi do playera z odpowiednimi parametrami */}
            <TouchableOpacity style={styles.listElement} onPress={() => navigation.navigate('Library')}> 
                <Text bold style={styles.mainFont} center>Choose random sound</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listElement} onPress={() => navigation.navigate('Library')}>
                <Text bold style={styles.mainFont} center>About</Text>
            </TouchableOpacity>
        </Box>
    );
}

const styles = StyleSheet.create({
    mainBox: {
        width: '100%',
        //backgroundColor: theme.color.pink
    },
    listElement: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: theme.space.sm,
        margin: theme.space.xs,
        width: '80%',
        borderColor: theme.color.greenBottled,
        //backgroundColor: theme.color.pinkDarker,
        padding: theme.space.xs,
        textAlign: 'center',
    },
    mainFont: {
        color: theme.color.greenBottled
    }
});

export default HomeScreen;