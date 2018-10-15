import { put, call, takeEvery } from 'redux-saga/effects'
import createAxios from '../../../client/axiosInstance'
import {
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILURE,
  REQUEST_POSTS
} from './constants'

export function* fetchPosts(axios) {
  try {
    const res = yield call(axios.get, '/api/posts')
    yield put({ type: REQUEST_POSTS_SUCCESS, payload: res.data })
  } catch (error) {
    yield put({ type: REQUEST_POSTS_FAILURE, payload: error.message })
  }
}

export function* watchFetchPosts() {
  yield takeEvery(REQUEST_POSTS, fetchPosts, createAxios())
}

export default [watchFetchPosts()]
