import { all } from 'redux-saga/effects'
import { sagas as homeSagas } from '../containers/Home/store'
import { sagas as headerSagas } from '../components/Header/store'
import { sagas as commentSagas } from '../containers/Comments/store'

export default function* rootSaga() {
  yield all([
    ...homeSagas.default,
    ...headerSagas.default,
    ...commentSagas.default
  ])
}
