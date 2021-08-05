// import { ILibrary } from "../ILibrary";
// import * as actionTypes from "../actions/libraryTypes";

// export interface ILibraryReducer {
//   libraryList: ILibrary[];
// }

// const defaultState = (): ILibraryReducer => ({
//   libraryList: []
// });

// // eslint-disable-next-line import/no-anonymous-default-export
// export default (state = defaultState(), action: any) => {
//   switch (action.type) {
//     case actionTypes.GET_LIBRARY: {
//       const paylod: actionTypes.ILibraryTypes["GET_LIBRARY"] = action;
//       return {
//         ...state,
//         libraryList: paylod.libraryList,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

