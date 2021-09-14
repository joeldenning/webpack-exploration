const path = require('path')

module.exports = {
  entry: {
    main: ['./src/main.js', './src/other.js'],
    other: './src/other.js'
  },
  output: {
    path: path.resolve(process.cwd(), './dist'),
    filename: "[name].[contenthash].js"
  },
  devtool: "source-map",
  mode: 'development'
}