import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import routes from '../routes'
import { configureClientStore } from '../store'
import rootSaga from './rootSaga'

const store = configureClientStore()
store.runSaga(rootSaga)
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>{renderRoutes(routes)}</Fragment>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('root'))
