import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import { Switch } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {setDarkMode} from '../../actions/darkModeActions';
import {IState} from '../../reducers'
import { IDarkMode } from '../../reducers/darkModeReducer';
import { useTheme } from '@react-navigation/native';
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
            <Text style={{color: colors.colors.text}}>About Screen</Text>
            <Text style={{color: colors.colors.text}}>Version: 0.9.1</Text>
            <Text bold style={{color: colors.colors.text}}>Settings:</Text>
            <Switch
                trackColor={{ false: colors.colors.card, true: colors.colors.border }}
                thumbColor={isDarkModeOn ? colors.colors.text : colors.colors.text}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isDarkModeOn}
            />
        </Box>
    );
}
export default AboutScreen;