import { LOGIN, CHECK_LOGIN, LOGOUT } from './constants'

export const getLogin = () => {
  return {
    type: LOGIN
  }
}

export const checkLogin = () => {
  return {
    type: CHECK_LOGIN
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}
