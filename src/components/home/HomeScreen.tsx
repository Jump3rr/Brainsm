import React, { useEffect } from 'react';
import {Box, Text} from 'react-native-design-utility';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

const HomeScreen = () => {
    return (
        <Box f={1} center style={styles.mainBox}>
            <Text bold size="xl" mb="xl">LOGO</Text>
            <Box p="xs" style={styles.listElement} center>
                <Text bold style={styles.mainFont}>All sounds</Text>
            </Box>
            <Box p="xs" style={styles.listElement} center>
                <Text bold style={styles.mainFont}>Nature</Text>
            </Box>
            <Box p="xs" style={styles.listElement} center>
                <Text bold style={styles.mainFont}>People</Text>
            </Box>
            <Box p="xs" style={styles.listElement} center>
                <Text bold style={styles.mainFont}>ASMR</Text>
            </Box>
            <Box p="xs" style={styles.listElement} center>
                <Text bold style={styles.mainFont}>Choose random sound</Text>
            </Box>
            <Box p="xs" style={styles.listElement} center>
                <Text bold style={styles.mainFont}>About</Text>
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    mainBox: {
        width: '100%',
        backgroundColor: theme.color.pink
    },
    listElement: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: theme.space.sm,
        margin: theme.space.xs,
        width: '80%',
        borderColor: theme.color.greenBottled,
    },
    mainFont: {
        color: theme.color.greenBottled
    }
});

export default HomeScreen;