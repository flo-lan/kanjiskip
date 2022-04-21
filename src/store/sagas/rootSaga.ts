import { take } from 'redux-saga/effects'

import { REHYDRATE } from 'redux-persist/es/constants'

export function* rootSaga(): Generator {
  // wait for store to be built from persistence
  yield take(REHYDRATE)
}
