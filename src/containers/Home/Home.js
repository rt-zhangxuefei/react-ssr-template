import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from './store/actions'
import { sagas } from './store'
import styles from './style.css'
import { withStyle } from '../../utils'

class Home extends Component {
  componentDidMount() {
    if (!this.props.posts.length) {
      this.props.getPosts()
    }
  }

  render() {
    const { posts } = this.props
    return (
      <div className={styles.home}>
        <div className={styles.title}>10大热门文章</div>
        {posts.map(v => (
          <p key={v.id}>{v.id + ' ' + v.title}</p>
        ))}
      </div>
    )
  }
}

Home.loadData = sagas.fetchPosts

const mapStateToProps = state => ({
  posts: state.home.posts
})

export default connect(
  mapStateToProps,
  { getPosts }
)(withStyle(Home, styles))
