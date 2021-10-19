import {combineReducers} from 'redux';
import sounds, { ISoundReducer } from "./soundsReducer";
import nature, { INatureReducer } from './natureReducer';
import asmr, { IASMRReducer } from './asmrReducer';
import darkMode, { IDarkMode } from './darkModeReducer';

export default combineReducers({
    sounds,
    nature,
    asmr,
    darkMode
});

export interface IState {
    sounds: ISoundReducer;
    nature: INatureReducer;
    asmr: IASMRReducer;
    darkMode: IDarkMode;
}