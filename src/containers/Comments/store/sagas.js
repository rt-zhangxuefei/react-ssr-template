import { call, put, takeEvery } from 'redux-saga/effects'
import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  GET_COMMENTS
} from './constants'
import createAxios from '../../../client/axiosInstance'

export function* fetchComments(axios) {
  try {
    const res = yield call(axios.get, '/api/comments')
    yield put({ type: GET_COMMENTS_SUCCESS, payload: res.data })
  } catch (error) {
    yield put({ type: GET_COMMENTS_FAILURE, payload: error.message })
  }
}

export function* watchFetchComments() {
  yield takeEvery(GET_COMMENTS, fetchComments, createAxios())
}

export default [watchFetchComments()]
