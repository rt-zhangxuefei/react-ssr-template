import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_FAILURE
} from './constants'

const initState = {
  login: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload }
    case LOGIN_FAILURE:
      return { login: false, error: action.payload }
    case LOGOUT_SUCCESS:
      return { ...state, ...action.payload }
    case LOGOUT_FAILURE:
      return { login: false, error: action.payload }
    case CHECK_LOGIN_SUCCESS:
      return { ...state, ...action.payload }
    case CHECK_LOGIN_FAILURE:
      return { login: false, error: action.payload }
    default:
      return state
  }
}
