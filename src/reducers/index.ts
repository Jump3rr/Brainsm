import {combineReducers} from 'redux';
import sounds, { ISoundReducer } from "./soundsReducer";

export default combineReducers({
    sounds,
});

export interface IState {
    sounds: ISoundReducer;
}