export const ThemeActionTypes = { SET_THEME: 'SET_THEME' }

export type Theme = 'light' | 'dark'

export interface SetThemeAction {
  type: typeof ThemeActionTypes.SET_THEME
  theme: Theme
}

export default SetThemeAction
