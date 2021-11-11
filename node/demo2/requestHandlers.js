/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-11 14:05:44
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-11 23:16:55
 */
const exec = require('child_process').exec;
const queryString = require('querystring');
const formidable = require('formidable');
const fs = require('fs');
function start(response, request) {
    console.log('Request handler "start" was called');
    // function sleep(milliSeconds) {
    //     const startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }
    // sleep(10000);

    // let content = 'empty';
    // 非阻塞式操作
    // exec("dir", function (error, stdout, stdErr) {
    //     // console.log( stdout);
    //     // constent = stdout;
    //     response.writeHeader(200, { "content-type": "text/plain" });
    //     response.write(stdout);
    //     response.end();
    // })
    // console.log(content);
    // return content;
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="file" name="upload" multiple="multiple"/>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();

}
function upload(response, request) {
    console.log('Request handler "upload" was called');
    //     response.writeHeader(200, { "content-type": "text/plain" });
    //     response.write('upload,You send :' + queryString.parse(postData).text);
    //     response.end();


    const form = new formidable.IncomingForm();
    console.log(form);
    form.parse(request, function (error, fields, files) {
        console.log(files);
        fs.renameSync(files.upload.filepath,"C:\\Users\\ee\\AppData\\Local\\Temp\\test.png");
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    })
}

function show(response, request) {
    console.log('Request handler "show" was called.');
    fs.readFile("C:\\Users\\ee\\AppData\\Local\\Temp\\test.png", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, { "content-type": "text/plain" });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, { "content-type": "text/plain" });
            response.write(file, 'binary');
            response.end();
        }
    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;