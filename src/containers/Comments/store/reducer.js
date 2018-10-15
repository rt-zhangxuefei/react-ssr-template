import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  GET_COMMENTS
} from './constants'

const initState = {
  comments: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return state
    case GET_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload }
    case GET_COMMENTS_FAILURE:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
