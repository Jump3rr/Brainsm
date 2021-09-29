import { ISound } from "../entities/ISound"
import * as types from "../actions/soundsTypes";

export interface ISoundReducer {
  soundList: ISound[];
}
const defaultState = {
  soundList: []
};


export default (state = defaultState, { type, payload}: any) => {
  switch(type) {
    case types.GET_SOUNDS:
      state = { ...state, soundList: payload }
      return state;
    default:
      return state;
  }
}

// const defaultState = (): ISoundReducer => ({
//   soundList: [{
//     artist: 'aa',
//     artwork: 'ba',
//     duration: 5,
//     title: 'aasdd',
//     url: 'asdf'
//   }, 
// {
//   artist: 'a',
//   artwork: 'b',
//   duration: 52,
//   title: 'adc',
//   url: 'asdfas'
// }]
// });

// // eslint-disable-next-line import/no-anonymous-default-export
// export default (state = defaultState(), action: any) => {
//   switch (action.type) {
//     case actionTypes.GET_SOUNDS: {
//       const paylod: actionTypes.ISoundsTypes["GET_SOUNDS"] = action;
//       return {
//         ...state,
//         soundList: paylod.soundList,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

