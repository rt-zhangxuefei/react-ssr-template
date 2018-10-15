const express = require('express')
const session = require('express-session')
const { posts, comments } = require('./data')
const app = express()

app.use(
  session({
    secret: 'session',
    resave: false,
    name: 'sid',
    saveUninitialized: false
  })
)

app.get('/api/posts', (req, res) => {
  res.json(posts)
})

app.get('/api/comments', (req, res) => {
  if (req.session.authorized) {
    res.json(comments)
  } else {
    res.json([])
  }
})

app.get('/api/login', (req, res) => {
  req.session.authorized = true
  res.json({
    login: true
  })
})

app.get('/api/islogin', (req, res) => {
  res.json({ login: req.session.authorized || false })
})

app.get('/api/logout', (req, res) => {
  req.session.authorized = false
  res.json({ login: false })
})

app.listen(3001, () => {
  console.info('server is running on: http://localhost:3001')
})
