import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'

import IntlApp from './IntlApp'
import { configureStore } from './config/store'
import { RootState } from './store/reducer/state'

import './styles/index.css'
import Spinner from './components/Spinner/Spinner'

const { store, persistor } = configureStore({} as RootState)
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <IntlApp />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
