const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base.conf");
module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    historyApiFallback: true,
    open: true
  }
});
