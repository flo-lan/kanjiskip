import { Reducer } from 'redux'

import IntlAction, { IntlActionTypes } from '../actions/intlActions'
import { SupportedLocales } from '../../utils/intlUtils'

export interface IntlState {
  locale: SupportedLocales | null
}

const initialState: IntlState = {
  locale: null,
}

const intlReducer: Reducer = (
  state: IntlState = initialState,
  action: IntlAction
): IntlState => {
  switch (action.type) {
    case IntlActionTypes.SET_LOCALE:
      return {
        ...state,
        locale: action.locale,
      }
    default:
      return state
  }
}

export default intlReducer
