import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store'
import styles from './style.less'
import { withStyle } from '../../utils'

class Header extends Component {
  render() {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div className={styles.header}>
        <Link to="/">首页</Link>

        {login ? (
          <Fragment>
            {' '}
            <Link to="/comments">热门评论</Link>
            <a href="javascript:;" onClick={handleLogout}>
              退出
            </a>
          </Fragment>
        ) : (
          <a href="javascript:;" onClick={handleLogin}>
            登录
          </a>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  login: state.header.login
})

export default connect(
  mapStateToProps,
  { handleLogin: actions.getLogin, handleLogout: actions.logout }
)(withStyle(Header, styles))
