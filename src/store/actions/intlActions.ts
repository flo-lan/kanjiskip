import { SupportedLocales } from '../../utils/intlUtils'

export const IntlActionTypes = { SET_LOCALE: 'SET_LOCALE' }

interface SetLocaleAction {
  type: typeof IntlActionTypes.SET_LOCALE
  locale: SupportedLocales
}

export default SetLocaleAction
