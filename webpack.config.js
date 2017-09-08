const path = require('path');

module.exports = {
  entry: './src/3dimage.js',
  output: {
    filename: '3dimage.js',
    path: path.resolve(__dirname, 'dist')
  }
};
