const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('@types/webpack').Configuration}
 */
const config = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(process.cwd(), './dist'),
    filename: "[name].[contenthash].js",
    library: 'Exploration'
  },
  devtool: "source-map",
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.ejs'),
      inject: true
    })
  ]
}

module.exports = config