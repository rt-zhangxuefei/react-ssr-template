const path = require('path')
// 引入的node包例如express，不打包到bundle里面，保持引用
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = require('./webpack.base')

const serverConfig = {
  target: 'node',
  mode: 'production',
  entry: ['@babel/polyfill', './src/server/index.js'],
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')(), require('cssnano')()]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')(), require('cssnano')()]
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(['build'])]
}

module.exports = merge(config, serverConfig)
