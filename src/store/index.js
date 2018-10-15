import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducer as homeReducer } from '../containers/Home/store'
import { reducer as headerReducer } from '../components/Header/store'
import { reducer as commentReducer } from '../containers/Comments/store'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  comment: commentReducer
})

export const configureStore = () => {
  return {
    ...createStore(reducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}

export const configureClientStore = () => {
  const defaultState = window.context.state
  return {
    ...createStore(reducer, defaultState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}
