const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const main = require('./webpack.config.js');

module.exports = merge(main, {
  plugins: [
    new UglifyJSPlugin()
  ]
});
