const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/Main.jsx',
    './src/styles/reset.css',
    './src/styles/style.css'
  ],
  plugins: [
    // new UglifyJSPlugin({
    //   test: /\.js($|\?)/i,
    //   sourceMap: true
    // }),
    new ExtractTextPlugin("./css/style.min.css")
  ],
  output: {
    filename: './js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?minimize'
        })
      }
    ]
  }
};
