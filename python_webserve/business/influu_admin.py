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

# 登录token
@app.route('/sso/oauth/token',methods=['POST',"GET"])
def user_token():
    rootPath = getRootPath()
    verifyEmailJsonArr = ['author_token_success.json']
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #
    print(jsonFilrIndex)
    filePath = os.path.join(rootPath, "data_json","author_token", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)

# influu后台的接口
# 功能导航列表获取按钮
@app.route('/admin/menu/userMenu',methods=['POST',"GET"])
def admin_nabigation_lists():
    rootPath = getRootPath()
    verifyEmailJsonArr = ["admin_item_success.json"]
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #
    print(jsonFilrIndex)
    filePath = os.path.join(rootPath, "data_json","function_item_json", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)

# 获取用户角色列表
@app.route('/admin/role/pageQuery',methods=['POST',"GET"])
def admin_role_pageQuery():
    rootPath = getRootPath()
    verifyEmailJsonArr = ["role_list.json"]
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #
    print(jsonFilrIndex)
    filePath = os.path.join(rootPath, "data_json","author_command", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)

# 删除角色
@app.route('/role',methods=['POST',"GET","DELETE"])
def delete_role():
    rootPath = getRootPath()
    verifyEmailJsonArr = ["delete_role.json"]
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #
    print(jsonFilrIndex)
    filePath = os.path.join(rootPath, "data_json","author_command", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)

# 编辑角色
@app.route('/role/edit',methods=['POST',"GET","DELETE"])
def edit_role():
    rootPath = getRootPath()
    verifyEmailJsonArr = ["edit_menu_tree.json"]
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #
    print(jsonFilrIndex)
    filePath = os.path.join(rootPath, "data_json","author_command", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)

# 新建角色时分配的权限点
@app.route('/menu/tree',methods=['POST',"GET"])
def create_role():
    rootPath = getRootPath()
    verifyEmailJsonArr = ["menu_tree.json"]
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #
    print(jsonFilrIndex)
    filePath = os.path.join(rootPath, "data_json","author_command", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)

# 保存角色
@app.route('/role/save',methods=['POST',"GET"])
def save_role():
    rootPath = getRootPath()
    verifyEmailJsonArr = ["delete_role.json"]
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #
    print(jsonFilrIndex)
    filePath = os.path.join(rootPath, "data_json","author_command", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)


# 当前用户分配的角色列表
@app.route('/role/queryRoleListByUserId',methods=['POST',"GET"])
def query_roles_by_user_id():
    rootPath = getRootPath()
    verifyEmailJsonArr = ["role_list.json"]
    jsonFilrIndex = random.randint(0,len(verifyEmailJsonArr)-1)
    #
    print(jsonFilrIndex)
    filePath = os.path.join(rootPath, "data_json","author_command", verifyEmailJsonArr[jsonFilrIndex])
    print(filePath)
    return operateFile(filePath)






if __name__ =="__main__":
    app.run(port=5002)