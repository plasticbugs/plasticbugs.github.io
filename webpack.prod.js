const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const extractSass = new ExtractTextPlugin('./css/style.min.css');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
    }),
    extractSass,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // new ExtractTextPlugin("./css/style.min.css")
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader?minimize', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // creates style nodes from JS strings
          }],
          // fallback: "style-loader"
        }),
      },
    ],
  },
});
