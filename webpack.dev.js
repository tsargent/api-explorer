const {merge} = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = (env, argv) =>
  merge(common(env, argv), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, './dist'),
      historyApiFallback: true,
      hot: true,
    },
  })
