const merge = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");
const baseConfig = require("./webpack.base.conf");
module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../publish"),
    filename: "[name].[hash].js",
    publicPath: "./"
  },
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
});
