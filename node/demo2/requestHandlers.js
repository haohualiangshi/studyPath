/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-11 14:05:44
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-11 19:16:21
 */
const exec = require('child_process').exec;
function start(response) {
    console.log('Request handler "start" was called');
    // function sleep(milliSeconds) {
    //     const startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }
    // sleep(10000);

    // let content = 'empty';
    exec("dir", function (error, stdout, stdErr) {
        // console.log( stdout);
        // constent = stdout;
        response.writeHeader(200, { "content-type": "text/plain" });
        response.write(stdout);
        response.end();
    })
    // console.log(content);
    // return content;
}
function upload(response) {
    console.log('Request handler "upload" was called');
    response.writeHeader(200, { "content-type": "text/plain" });
    response.write('upload');
    response.end();
}

exports.start = start;
exports.upload = upload;