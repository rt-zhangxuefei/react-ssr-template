import App from '../App'
import NotFound from '../containers/NotFound/NotFound'
import Home from '../containers/Home/Home'
import Comments from '../containers/Comments/Comments'

export default [
  {
    key: 'App',
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home'
      },
      {
        path: '/comments',
        component: Comments,
        loadData: Comments.loadData,
        exact: true,
        key: 'comments'
      },
      {
        component: NotFound
      }
    ]
  }
]
