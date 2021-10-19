import { ISound } from "../entities/ISound"
import * as types from "../actions/soundsTypes";

export interface IASMRReducer {
    asmrList: ISound[];
}
const defaultState = {
    asmrList: []
};


export default (state = defaultState, { type, payload}: any) => {
  switch(type) {
    case types.GET_ASMR_SOUNDS:
      state = { ...state, asmrList: payload }
      return state;
    default:
      return state;
  }
}