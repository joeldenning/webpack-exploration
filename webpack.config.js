const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/**
 * @type {import('@types/webpack').Configuration}
 */
const config = {
  entry: path.resolve(__dirname, 'src/main.tsx'),
  output: {
    path: path.resolve(process.cwd(), './dist'),
    filename: "[name].[contenthash].js",
  },
  devtool: "source-map",
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.ejs'),
      inject: true
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
}

module.exports = config