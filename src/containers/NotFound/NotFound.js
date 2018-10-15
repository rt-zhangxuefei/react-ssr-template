import React, { Component } from 'react'

class NotFound extends Component {
  componentWillMount() {
    const { staticContext } = this.props
    staticContext && (staticContext.NOT_FOUND = true)
  }
  render() {
    return <div>404,sorry, page not found</div>
  }
}

export default NotFound
