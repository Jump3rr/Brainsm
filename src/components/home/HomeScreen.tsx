import React, { useEffect } from 'react';
import {Box, Text} from 'react-native-design-utility';
//import { getSounds } from '../../actions/soundsActions';
import HomeScreen2 from './home2';

const HomeScreen = () => {
    return (
        <Box f={1} center>
            <Text>Home Screen</Text>
            <HomeScreen2 />
        </Box>
    );
}
export default HomeScreen;