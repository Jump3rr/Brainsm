import { ISound } from "../entities/ISound"
import * as types from "../actions/soundsTypes";

export interface INatureReducer {
  natureList: ISound[];
}
const defaultState = {
    natureList: []
};


export default (state = defaultState, { type, payload}: any) => {
  switch(type) {
    case types.GET_NATURE_SOUNDS:
      state = { ...state, natureList: payload }
      return state;
    default:
      return state;
  }
}