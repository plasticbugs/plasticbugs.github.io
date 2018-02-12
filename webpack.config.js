// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const webpack = require('webpack');

// const extractSass = new ExtractTextPlugin(
//   "./css/style.min.css"
// );

// module.exports = {
//   entry: [
//     './src/Main.jsx'
//     // './src/styles/reset.css',
//     // './src/styles/style.css'
//   ],
//   plugins: [
//     new UglifyJSPlugin({
//       test: /\.js($|\?)/i,
//       sourceMap: true
//     }),
//     extractSass,
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('production')
//     })
//     // new ExtractTextPlugin("./css/style.min.css")
//   ],
//   output: {
//     filename: './js/bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader'
//         }
//       },
//       // {
//       //   test: /\.css$/,
//       //   exclude: /(node_modules)/,
//       //   use: [
//       //     { loader: "style-loader" },
//       //     { loader: "css-loader?minimize" }
//       //   ]
//       //   // use: ExtractTextPlugin.extract({
//       //   //   use: 'css-loader?minimize'
//       //   // })
//       // },
//       {
//         test: /\.scss$/,
//         exclude: /(node_modules)/,
//         use: extractSass.extract({
//           use: [{
//               loader: "css-loader?minimize", // translates CSS into CommonJS
//             },
//             {
//               loader: "sass-loader" // creates style nodes from JS strings
//             }]
//           // fallback: "style-loader"
//         })
//       }
//     ]
//   }
// };
