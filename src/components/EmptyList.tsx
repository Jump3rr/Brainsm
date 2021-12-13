import React from 'react';
import { StyleSheet} from 'react-native';
import {Box, Text } from 'react-native-design-utility';
import { theme } from '../constants/theme';
import KeyboardDismissView from './KeyboardDismissView';
import { useSelector } from "react-redux";
import { useTheme } from '@react-navigation/native';


const EmptyList = () => {

    const colors = useTheme();

    return (
        <KeyboardDismissView>
            <Box f={1}>
            <Box p="xl" align="center">
            <Text bold style={{color: colors.colors.text}} center>Something went wrong!</Text>
            <Text style={{color: colors.colors.text}} center>Please check your internet connection or contact us</Text>
            </Box>
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
    },
    images: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 10
    }
});
export default EmptyList;