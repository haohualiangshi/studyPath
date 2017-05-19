var webpack = require("webpack");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// // Create multiple instances
// const extractCSS = new ExtractTextPlugin('../css/index.css');
// const extractLESS = new ExtractTextPlugin('../css/index-1.css');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: __dirname + "/src/js/index.js",
        more: [__dirname + "/src/js/a.js", __dirname + "/src/js/b.js"],
        v: ['jquery']
    }, //唯一入口文件
    output: {
        path: __dirname + "/assets/",
        filename: "js/[name].js",
        publicPath: "http://172.17.238.223:8081/assets/" //测试环境。看不到。类似缓存
    },
    devServer: {
        contentBase: "./",
        host: "172.17.238.223",
        port: "8081"
    },
    module: {
        rules: [{
            test: /\.less$/i,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        }, {

            test: /\.json$/,
            use: 'json-loader'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },{
            test:/\.png|.jpg|.jpeg$/,
            loader:"file-loader?limit=5000000&name=img/[hash:8].[name].[ext]"
        },{
            test:/\.html$/,
            loader:"html-loader"
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        /* extractCSS,
         extractLESS*/
        new HtmlWebpackPlugin({
            title: "zhang",
            filename: "../index.html",
            template: __dirname + '/src/tml/index.html',
            inject: "body",
            info: "hello world"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["a","b"]
            // filename: "lib/jquery.min.js"
        })

        // new webpack.optimize.CommonsChunkPlugin({name:"v",filename:"lib/jquery.min.js"})
    ],
    watch: true,
    // resolve:{
    //     root:'d:js',
    //     extensions:['','.js'],
    //     alias:{
    //         appAdd:'add.js'
    //     }
    // }
    // externals:{
    //     jquery:"jq网址"
    // }
}

if(process.env.NODE_ENV === "dev"){
    //开发
    console.log("开发环境")
}else{
    //生产
      console.log("生产环境")
}
