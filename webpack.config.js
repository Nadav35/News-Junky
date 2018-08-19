const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, './public/javascripts/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public')
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  devtool: 'source-map'
};
