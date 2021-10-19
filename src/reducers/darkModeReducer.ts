import * as actionTypes from "../actions/darkModeTypes";

export interface IDarkMode {
  isDarkModeOn: boolean;
}
const defaultState = (): IDarkMode => ({
  isDarkModeOn: false
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_DARK_MODE: {
      return {
        ...state,
        isDarkModeOn: state.isDarkModeOn
      };
    }
    case actionTypes.SET_DARK_MODE: {
        return {
            ...state,
            isDarkModeOn: !state.isDarkModeOn
          };
    }
    default: {
      return state;
    }
  }
};