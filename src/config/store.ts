import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { Persistor } from 'redux-persist/es/types'
import createSagaMiddleware from 'redux-saga'
import { handleRequests } from '@redux-requests/core'
import { createDriver } from '@redux-requests/axios'

import { onErrorSaga } from '../store/interceptors'
import { RootState } from '../store/reducer/state'

import axiosClient from '../utils/axiosClient'
import themeReducer from '../store/reducer/themeReducer'
import intlReducer from '../store/reducer/intlReducer'
import { rootSaga } from '../store/sagas/rootSaga'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['themes', 'intl'],
}

export function configureStore(initialState: RootState): {
  store: Store<RootState>
  persistor: Persistor
} {
  // https://stackoverflow.com/questions/52800877/error-with-redux-devtools-extension-using-ts-property-redux-devtools-extens
  const composeEnhancers =
    (process.env.NODE_ENV === 'development'
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : null) || compose

  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware()

  // create requests reducer and middleware
  const { requestsReducer, requestsMiddleware } = handleRequests({
    driver: createDriver(axiosClient),
    onError: onErrorSaga,
  })

  const middleware = applyMiddleware(sagaMiddleware, ...requestsMiddleware)

  const rootReducer = combineReducers({
    requests: requestsReducer,
    themes: themeReducer,
    intl: intlReducer,
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(middleware)
  )

  const persistor = persistStore(store)

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga)
  return { store, persistor }
}
