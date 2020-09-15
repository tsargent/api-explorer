const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = (env, argv) => {
  const {mode} = argv
  const isProduction = mode === 'production'
  return {
    entry: {
      main: './src/main.js',
    },
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, 'dist'),
      publicPath: path.resolve(__dirname, '/'),
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        APPLICATION: 'web',
        NODE_ENV: 'local',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
        minify: false,
      }),
    ],
  }
}
