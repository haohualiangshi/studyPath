/*
 * @Descripttion: 此文件作为Generator的核心入口；需要导出一个继承自Yeoman Generator的类型
 * Yeoman Generator在工作时会自动调用我们在次类型中定义的一些生命周期方法；我们在这些方法中可以通过调用
 * 父类提供的一些工具方法实现一些功能
 * @version: 0.0.0
 * @Author: ahao
 * @Date: 2021-09-26 13:57:02
 * @LastEditors: ahao
 * @LastEditTime: 2021-09-26 19:50:27
 */
const Generator = require('yeoman-generator');
module.exports = class extends Generator {

    // 通过模板方式写入数据到模板目录
    writing(){
        // // 模板文件路径
        // const tmpl=this.templatePath('foo.txt');
        // // 输出目标路径
        // const output=this.destinationPath('foo.txt');
        // // 模板数据上下文
        // const context={title:'Hello ahao',success:false};
        // this.fs.copyTpl(tmpl,output,context);

        // 模板文件路径
        const tmpl=this.templatePath('bar.html');
        // 输出目标路径
        const output=this.destinationPath('bar.html');
        // 模板数据上下文
        const context=this.answers;
        this.fs.copyTpl(tmpl,output,context);

    }
    


    prompting() {
        // Yeoman在询问用户环节会自动调用此方法
        // 在此方法中可以调用父类的prompt()发出对用户的命令行询问
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname //appname为项目生成目录名称
            },
            {
                type: 'input',
                name: 'description',
                message: 'Your project description',
                default: this.description //appname为项目生成目录名称
            }
        ]).then(answers => {
            // answers=>{name:'user }
            console.log(answers);
            this.answers = answers;
        })
    }
    
}