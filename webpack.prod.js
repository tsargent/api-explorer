const {merge} = require('webpack-merge')
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = (env, argv = {}) =>
  merge(common(env, argv), {
    mode: 'production',
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    output: {
      path: path.resolve('./dist'),
      chunkFilename: '[id].js',
      publicPath: '/',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
      }),
    ],
  })
