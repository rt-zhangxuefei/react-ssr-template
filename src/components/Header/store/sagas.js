import { put, call, takeEvery } from 'redux-saga/effects'
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CHECK_LOGIN,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_FAILURE
} from './constants'
import createAxios from '../../../client/axiosInstance'

export function* getLogin(axios) {
  try {
    const res = yield call(axios.get, '/api/login')
    yield put({ type: LOGIN_SUCCESS, payload: res.data })
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error.message })
  }
}
export function* getLogout(axios) {
  try {
    const res = yield call(axios.get, '/api/logout')
    yield put({ type: LOGOUT_SUCCESS, payload: res.data })
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, payload: error.message })
  }
}

export function* checkLogin(axios) {
  try {
    const res = yield call(axios.get, '/api/islogin')
    yield put({ type: CHECK_LOGIN_SUCCESS, payload: res.data })
  } catch (error) {
    yield put({ type: CHECK_LOGIN_FAILURE, payload: error.message })
  }
}

export function* watchGetLogin() {
  yield takeEvery(LOGIN, getLogin, createAxios())
}

export function* watchGetLogout() {
  yield takeEvery(LOGOUT, getLogout, createAxios())
}
export function* watchCheckLogin() {
  yield takeEvery(CHECK_LOGIN, checkLogin, createAxios())
}

export default [watchGetLogin(), watchGetLogout(), watchCheckLogin()]
