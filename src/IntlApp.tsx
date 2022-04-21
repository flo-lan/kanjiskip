import React, { ReactElement } from 'react'
import { IntlProvider } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from './store/reducer/state'
import {
  importMessages,
  locales,
  getLocaleFromBrowser,
  SupportedLocales,
} from './utils/intlUtils'
import IntlService from './store/service/intlService'

import App from './App'

const IntlApp = (): ReactElement => {
  const dispatch = useDispatch()
  const { locale } = useSelector((state: RootState) => state.intl)
  if (!locale) {
    const browserLanguage = navigator.language
    if (Object.keys(locales).includes(browserLanguage)) {
      dispatch(IntlService.setLocale(browserLanguage as SupportedLocales))
    } else {
      const browserLocale = getLocaleFromBrowser()
      if (browserLocale && Object.keys(locales).includes(browserLocale)) {
        dispatch(IntlService.setLocale(browserLocale as SupportedLocales))
      } else {
        dispatch(IntlService.setLocale('en'))
      }
    }
  }

  const [messages, setMessages] = React.useState(null)
  React.useEffect(() => {
    if (locale) {
      importMessages(locale).then((message) => setMessages(message))
    }
  }, [locale])

  return (
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  )
}

export default IntlApp
