import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import { Switch } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {setDarkMode} from '../../actions/darkModeActions';
import {IState} from '../../reducers'
import { IDarkMode } from '../../reducers/darkModeReducer';

const AboutScreen = () => {

    const dispatch = useDispatch();
    type SetDarkMode = ReturnType<typeof setDarkMode>;

    const toggleSwitch = () => dispatch<SetDarkMode>(setDarkMode());;

    const { isDarkModeOn } = useSelector<IState, IDarkMode>((globalState) => ({
        ...globalState.darkMode,
      }));
    return (
        <Box f={1} center>
            <Text>About Screen</Text>
            <Text>Version: 0.9.1</Text>
            <Text bold>Settings:</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkModeOn ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isDarkModeOn}
            />
        </Box>
    );
}
export default AboutScreen;