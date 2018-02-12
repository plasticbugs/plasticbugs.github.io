const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(
  common,
  {
    module: {
      rules: [{
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // fallback: "style-loader"
      }],
    },
  },
);
