import { Reducer } from 'redux'

import ThemeActions, { Theme, ThemeActionTypes } from '../actions/themeActions'

export interface ThemeState {
  theme: Theme
}

const initialState: ThemeState = {
  theme: null,
}

const themeReducer: Reducer = (
  state: ThemeState = initialState,
  action: ThemeActions
): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      }
    default:
      return state
  }
}

export default themeReducer
