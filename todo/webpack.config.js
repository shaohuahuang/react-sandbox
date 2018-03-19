var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    app: ["./App.js"]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'index.html',
        to: 'index.html'
      }
    ])
  ]
}