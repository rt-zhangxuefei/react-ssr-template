import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { sagas, actions } from './store'
import styles from './style.less'
import { withStyle } from '../../utils'

class Comments extends Component {
  componentDidMount() {
    if (!this.props.comments.length) {
      this.props.getComments()
    }
  }
  render() {
    const { comments, login } = this.props
    return login ? (
      <div className={styles.content}>
        {comments.map(v => (
          <p key={v.id}>{'#' + v.id + ' ' + v.body}</p>
        ))}
      </div>
    ) : (
      <Redirect to="/" />
    )
  }
}

Comments.loadData = sagas.fetchComments

const mapStateToProps = state => ({
  comments: state.comment.comments,
  login: state.header.login
})

export default connect(
  mapStateToProps,
  { getComments: actions.getComments }
)(withStyle(Comments, styles))
