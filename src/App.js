import React, { Component } from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config'
import { sagas } from './components/Header/store'

class App extends Component {
  render() {
    const { route, staticContext } = this.props
    return (
      <div>
        <Header staticContext={staticContext} />
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

App.loadData = sagas.checkLogin

export default App
