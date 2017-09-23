const path = require('path');

module.exports = {
  entry: {
    tilted: './src/tilted.js',
    main: './demo/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'resolve-url-loader'
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=dist/fonts/[name].[ext]'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader?name=dist/fonts/[name].[ext]'
      }
    ]
  }
};
