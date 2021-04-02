"""
@File    :   写文件.py    
@Modify Time :  2021-03-30 11:00
@Author :  ahao
@Version :  1.0
@Description :
"""
import os
# from math import sqrt
import json


def main():
    path = os.path.abspath('../other_depends_file/a.json')
    # if not os.path.isfile(path):
    #     with open(path,'w') as f:
    #         f.close()
    # my_dict = {
    #     "name": 'hao',
    #     'age': 30,
    #     'qq': 123456,
    #     'email': '123456@163.com',
    #     'friends': ['阿亮', '鱼', '华子'],
    #     'cars': None,
    #     'home': ['one']
    # }
    # try:
    #     with open(path, 'a', encoding='utf-8') as fs:
    #         json.dump(my_dict, fs)
    # except (IOError, FileNotFoundError) as e:
    #     print(e)
    # print('save success!')

    try:
        with open(path,encoding='utf-8') as f:

            json_dict = json.load(f)

            # for i in json_dict:
            #     print(i)
            print(json_dict['name'])
    except FileNotFoundError:
        print('file error')


if __name__ == '__main__':
    main()
