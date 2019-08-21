const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
  entry: {
    boundle: path.resolve(__dirname, "../src/main.js")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env", "es2015", "stage-3"],
          plugins: ["syntax-dynamic-import", "transform-object-rest-spread"]
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "file-loader",
        options: { name: "fonts/[name].[ext]" }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.styl$/,
        loader:
          "css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: [".js", ".vue", ".json", ".styl"],
    alias: {
      vue$:"vue/dist/vue.js",
      "@vueDemos": "../src/vueDemos/",
      "@vueRoutersDemo": "../src/vueRouterDemos/",
      "vue-router$": "vue-router/dist/vue-router.common.js"
    }
  }
};
