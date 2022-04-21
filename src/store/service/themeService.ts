import ActionType, { Theme, ThemeActionTypes } from '../actions/themeActions'

export default {
  setTheme: (theme: Theme): ActionType => ({
    type: ThemeActionTypes.SET_THEME,
    theme,
  }),
}
