/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-22 15:54:30
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-23 15:59:26
 */
module.exports = function(config) {
    config.set({
        // 路径前缀
        basePath: "",

        // 用到的库或框架
        // 添加到这里表示注册为全局变量（不用反复在代码中 import 或 require）
        frameworks: ['mocha', 'chai'],

        // 需要提供给浏览器的源文件和测试文件
        files: ["unit-test/*.js"],

        // 需要排除的文件
        exclude: [],

        // 将文件提供给浏览器之前，进行预处理
        preprocessors: {
            // 匹配源文件，并使用 webpack 进行预处理
            '../lib/**/*.js': ['webpack'],
            // 匹配测试文件，并使用 webpack 进行预处理
            "./unit-test/*.js": ['webpack']
        },
        webpack: {
            mode: 'development',
            module: {
                rules: [{
                    // 匹配 JavaScript 文件
                    test: /\.js$/,
                    // 排除 node_modules 和 bower_components 目录
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        // 使用的 loader
                        loader: 'babel-loader',
                        // 传递给 babel-loader 的参数
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }]
            }
        },
        plugins: [
            "karma-webpack",
            "karma-mocha",
            "karma-chrome-launcher",
            "karma-chai",
            "karma-requirejs",
            "karma-htmlfile-reporter"
        ],
        // 测试信息报告器
        reporters: ["dots", 'html'],

        // 在浏览器中运行的端口
        port: 9876,

        // 是否将输出信息彩色显示（用于 reporters 和日志信息）
        colors: true,

        // 显示日志的级别
        logLevel: config.LOG_INFO,

        // 是否监听所有文件的变动
        autoWatch: true,

        // 需要测试的浏览器环境
        browsers: ["Chrome"],

        // 如果为 true 的话，Karma 将捕获浏览器，运行测试，并自动退出
        // 使用持续集成时会用到该选项（这里先默认，后面会说明）
        singleRun: false,

        // 允许同时启动的浏览器个数，默认无限个
        concurrency: Infinity,
        htmlReporter: {
            outputFile: 'reproter/units.html',

            // Optional
            pageTitle: 'Unit Tests',
            subPageTitle: 'A sample project description',
            groupSuites: true,
            useCompactStyle: true,
            useLegacyStyle: true,
            showOnlyFailed: false
        }
    });
};