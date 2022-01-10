/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-10-25 14:18:19
 * @LastEditors: ahao
 * @LastEditTime: 2022-01-07 16:18:48
 */
const name = 'bootstrap-vue' // page title
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js')
module.exports = {
    publicPath: './',
    outputDir: 'official',
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
                '@src': resolve('src')
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("icons", resolve("src/icons"))
            .set("components", resolve("src/components"))
            // .set("base", resolve("baseConfig"))
            .set("public", resolve("public"));
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: bootstrapSassAbstractsImports.join('\n')
            },
            scss: {
                additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
            }
        }
    }
}