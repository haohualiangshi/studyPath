from flask import Flask
from global_env import getRootPath
from flask import make_response
from flask_cors import CORS
from flask import request
import random

import os

app = Flask(__name__)
CORS(app, supports_credentials=True)

def operateFile(filePath):
    print("*********get args***************")
    print(request.args)
    print("***********form data************")
    print(request.form)
    print("***********post paras**********")
    print(request.json)

    file_object = open(filePath)
    try:
        result_text = file_object.read()
    finally:
        file_object.close()
        #
    rst = make_response(result_text)
    rst.headers['Access-Control-Allow-Origin'] = '*'
    rst.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE,OPTIONS'
    rst.headers['Content-type'] = 'application/json;chartset=utf-8'
    # allow_headers = "Referer,Accept,Origin,User-Agent"
    # rst.headers['Access-Control-Allow-Headers'] = allow_headers
    print(rst)
    return rst, 200


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
def result():
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


# 网红注册邮箱验证
@app.route('/user/getCodeByEmail',methods=['GET','POST'])
def verifyEmailResult():
    rootPath = getRootPath()
    verifyEmailJsonArr = ['verifyEmailFail.json','verifyEmailSuccess.json']
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #

    filePath = os.path.join(rootPath, "data_json", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)
# 网红注册
@app.route('/user/register',methods=['POST',"GET"])
def influuRegister():
    rootPath = getRootPath()
    verifyEmailJsonArr = ['emailAlreadyHas.json','registerFail.json',"registeSuccess.json","userNameAlreadyHas.json"]
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #
    print(jsonFilrIndex)
    filePath = os.path.join(rootPath, "data_json","registerJsons", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)

# 网红登录认证
@app.route('/authentication/form',methods=['POST',"GET"])
def user_author():
    rootPath = getRootPath()
    verifyEmailJsonArr = ['author_success.json','author_times_than_three.json',"email_or_pwd_fail.json"]
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #
    print(jsonFilrIndex)
    filePath = os.path.join(rootPath, "data_json","author", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)

# 网红登录token
@app.route('/oauth/token',methods=['POST',"GET"])
def user_token():
    rootPath = getRootPath()
    verifyEmailJsonArr = ['author_token_success.json',"login_success.json"]
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #
    print(jsonFilrIndex)
    filePath = os.path.join(rootPath, "data_json","author_token", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)




if __name__ =="__main__":
    app.run()