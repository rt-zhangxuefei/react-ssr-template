import {
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILURE,
  REQUEST_POSTS
} from './constants'

const initState = {
  posts: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return state
    case REQUEST_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload
      }
    }
    case REQUEST_POSTS_FAILURE: {
      return { posts: [], error: action.payload }
    }
    default:
      return state
  }
}
