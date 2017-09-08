const path = require('path');

module.exports = {
  entry: './src/tilted.js',
  output: {
    filename: 'tilted.js',
    path: path.resolve(__dirname, 'dist')
  }
};
