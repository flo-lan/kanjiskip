import ActionType, { IntlActionTypes } from '../actions/intlActions'
import { SupportedLocales } from '../../utils/intlUtils'

export default {
  setLocale: (locale: SupportedLocales): ActionType => ({
    type: IntlActionTypes.SET_LOCALE,
    locale,
  }),
}
