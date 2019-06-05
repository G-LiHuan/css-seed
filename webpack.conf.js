const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    // new ExtractTextPlugin(),
    new HtmlWebackPlugin({
      title: 'CSS Seed',
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.js', '.css']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  }
};