import { IntlState } from './intlReducer'
import { ThemeState } from './themeReducer'

export interface RootState {
  themes: ThemeState
  intl: IntlState
}
