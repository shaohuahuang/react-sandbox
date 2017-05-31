var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var webpack = require('webpack');


module.exports = {
  context: path.join(__dirname, '/'),
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './index.html',
        to: 'index.html'
      }
    ]),
  ]
};