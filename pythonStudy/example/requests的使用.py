"""
@File    :   requests的使用.py    
@Modify Time :  2021-03-30 15:35
@Author :  ahao
@Version :  1.0
@Description :
"""
import requests


def main():
    para = {"wd": '三心二意', 'key': '5ddf872697fd75c46743bef535b52370'}
    try:
        resq = requests.get('http://apis.juhe.cn/idioms/query', para)
        data_model = resq.json()
        print(data_model)
        print(data_model['reason'],data_model['error_code'])
        if data_model['reason'] == 'success!' and 0 == data_model['error_code']:
            result = data_model['result']
            print(result['jbsy'])
    except BaseException as e:
        print(e)


if __name__ == "__main__":
    main()
