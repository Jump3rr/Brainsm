import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import { Linking, Switch } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {setDarkMode} from '../../actions/darkModeActions';
import {IState} from '../../reducers'
import { IDarkMode } from '../../reducers/darkModeReducer';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const AboutScreen = () => {

    const colors = useTheme();
    const dispatch = useDispatch();
    type SetDarkMode = ReturnType<typeof setDarkMode>;

    const toggleSwitch = () => dispatch<SetDarkMode>(setDarkMode());;

    const { isDarkModeOn } = useSelector<IState, IDarkMode>((globalState) => ({
        ...globalState.darkMode,
      }));
    return (
        <Box f={1} center>
            <Text mt={'md'} bold style={{color: colors.colors.text}}>Settings:</Text>
            <Box flexDirection='row'>
                <Text style={{color: colors.colors.text}}>Dark mode:</Text>
                <Switch
                    trackColor={{ false: colors.colors.card, true: colors.colors.border }}
                    thumbColor={isDarkModeOn ? colors.colors.text : colors.colors.text}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isDarkModeOn}
                />
            </Box>
            <Text mt={'md'} bold style={{color: colors.colors.text}}>Contact us:</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:j3rdev9@gmail.com')}>
                <Text style={{color: colors.colors.text}}>j3rdev9@gmail.com</Text>
            </TouchableOpacity>
            <Text mt={'md'} style={{color: colors.colors.text}}>Version: 0.9.1</Text>
        </Box>
    );
}
export default AboutScreen;