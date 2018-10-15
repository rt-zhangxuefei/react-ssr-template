import express from 'express'
import { all } from 'redux-saga/effects'
import { matchRoutes } from 'react-router-config'
import proxy from 'http-proxy-middleware'
import cookieParser from 'cookie-parser'
import { configureStore } from '../store'
import routes from '../routes'
import renderHtml from './renderHTML'
import { HOST } from '../config'
import createAxios from './axiosInstance'

const app = express()
app.use(cookieParser())
app.use(express.static('public'))

// proxy middleware options
var proxyOption = {
  target: HOST,
  changeOrigin: true
}

// create the proxy (without context)
var apiProxy = proxy(proxyOption)

app.use('/api', apiProxy)

app.get('*', (req, res) => {
  const store = configureStore()
  // 向store里面填充数据
  // 需要根据不同的路由，填充不同的store数据
  // 获取匹配的路由（包含嵌套）
  const matchedRoutes = matchRoutes(routes, req.path)

  const sagas = []

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      sagas.push(item.route.loadData(createAxios(req)))
    }
  })

  store
    .runSaga(function*() {
      yield all(sagas)
    })
    .done.then(() => {
      const context = { css: [] }
      const html = renderHtml(store, routes, req, context)
      if (context.action === 'REPLACE') {
        res.redirect(301, context.url)
      } else if (context.NOT_FOUND) {
        res.status(404)
        res.send(html)
      } else {
        res.send(html)
      }
    })
})

app.use((err, req, res, next) => {
  res.status(500).send('Sorry,Something goes wrong!')
})

const server = app.listen(3000)
