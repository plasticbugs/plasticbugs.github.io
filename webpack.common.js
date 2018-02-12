
module.exports = {
  entry: [
    './src/Main.jsx',
    // './src/styles/reset.css',
    // './src/styles/style.css'
  ],
  output: {
    filename: './js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.css$/,
      //   exclude: /(node_modules)/,
      //   use: [
      //     { loader: "style-loader" },
      //     { loader: "css-loader?minimize" }
      //   ]
      //   // use: ExtractTextPlugin.extract({
      //   //   use: 'css-loader?minimize'
      //   // })
      // },
    ],
  },
};
