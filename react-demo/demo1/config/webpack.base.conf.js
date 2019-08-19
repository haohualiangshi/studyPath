"use strict";
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口起点
  entry: {
    app: "./src/main.js"
  },
  // 输出
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  // 解析
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".scss"]
  },
  // loader
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/, // 屏蔽不需要处理的文件（文件夹）（可选）
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              // outputPath: 'images',
              publicPath: './',
              name:'images/[hash].[name].[ext]',
              limit: 8192,
              
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'images',
              publicPath: './',
            }
          }
        ]
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: "body"
    })
  ]
};
