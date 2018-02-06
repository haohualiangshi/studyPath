/*
* 删除生成的build文件的脚本
*/
var fs = require('fs');
var rimraf = require('rimraf');
var dirVars = require('../webpack-config/base/dir-vars.config.js');
rimraf(dirVars.buildDir, fs, function cb() {
  console.log('build目录已清空');
});
