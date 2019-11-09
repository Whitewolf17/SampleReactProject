const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  // 1
  entry: './src/index.js',
  // 2
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  // 3
  devServer: {
    contentBase: './dist',
    port: 8080,
    hot: true,
    host: '0.0.0.0',
    publicPath: 'http://localhost:8080',
    proxy: {
      "/api": "http://localhost:3000",
      pathRewrite: { '^/api': '' },
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      },
      {loader: 'jshint-loader'}
    ]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  }),
  new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: "./index.html"
    }),
  new webpack.HotModuleReplacementPlugin()

  ]
};
