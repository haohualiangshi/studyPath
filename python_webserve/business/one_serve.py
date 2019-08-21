from flask import Flask
from global_env import getRootPath
from flask import make_response

import os

app = Flask(__name__)

@app.route("/",methods=['GET','POST'])
def defaultReturn():
    try:
        result_text="warning : faile path, no data can return"
    except ModuleNotFoundError:
        print('error')
    rst = make_response(result_text)
    rst.headers['Access-Control-Allow-Origin'] = '*'
    return rst, 200

@app.route('/result', methods=['GET', 'POST'])
def index():
    rootPath = getRootPath()
    filePath = os.path.join(rootPath,"data_json","test_1.json")
    print(filePath)
    file_object = open(filePath)
    try:
        result_text = file_object.read()
    finally:
        file_object.close()
    #
    rst = make_response(result_text)
    rst.headers['Access-Control-Allow-Origin'] = '*'
    rst.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE,OPTIONS'
    rst.headers['Content-type']='text/json'
    # allow_headers = "Referer,Accept,Origin,User-Agent"
    # rst.headers['Access-Control-Allow-Headers'] = allow_headers
    print(rst)
    return rst, 200
    #return result_text, 201 #, {'Content-Type': 'application/json'}



if __name__ =="__main__":
    app.run()