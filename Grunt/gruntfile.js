/*
 * @Descripttion: Grunt的入口文件；用于定义一些需要的Grunt自动执行任务；需要导出一个函数；该函数接收一个grunt的形参
 * @version: 
 * @Author: ahao
 * @Date: 2021-10-11 14:21:55
 * @LastEditors: ahao
 * @LastEditTime: 2021-10-13 15:00:57
 */
const sass = require('sass');
module.exports = grunt => {
    // grunt.registerTask('foo', () => {
    //     console.log('Hello grunt~');
    // })
    // grunt.registerTask('bar', '这是一个任务描述', () => {
    //     console.log('other task~');
    // })
    // // 默认执行函数
    // // grunt.registerTask('default',()=>{
    // //     console.log('default~')
    // // })



    // // grunt定义异步函数需要用到this中的async方法
    // grunt.registerTask('async-task', function () {
    //     const done = this.async();
    //     setTimeout(() => {
    //         console.log('async task working~');
    //     }, 3000)
    // })

    // // grunt标记任务失败;失败后不再执行后续任务
    grunt.registerTask('bad', () => {
        console.log('bad working');
        return false;
    })
    // // 异步标记失败在函数体内调用false实参
    grunt.registerTask('bad-async', function () {
        const done = this.async();
        setTimeout(() => {
            console.log('bad-async');
            done(false);
        }, 1000)
    })

    //  // 自定义默认执行函数
    //  grunt.registerTask('default', ['bad','foo', 'bar'])

    // grunt的配置方法
    // grunt.initConfig({
    //     build: {
    //         options: {
    //             foo: 'bar'
    //         },
    //         css: '1',
    //         js: '2'
    //     }
    // })

    // // 多目标模式可以让任务根据配置形成多个子任务
    // grunt.registerMultiTask('build', function () {
    //     console.log(this.options())
    //     console.log(`target:${this.target},data:${this.data}`);
    // })


    // Grunt插件的使用
    // grunt.initConfig({
    //     clean: {
    //         temp: 'temp/test.js'
    //     }
    // })
    // grunt.loadNpmTasks('grunt-contrib-clean');


    // grunt常用的插件
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap:true
            },
            main: {
                files: {
                    'dist/css/main.css': 'scss/main.scss'
                }
            }
        }

    })
    grunt.loadNpmTasks('grunt-sass');

}