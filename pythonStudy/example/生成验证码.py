"""
@File    :   生成验证码.py    
@Modify Time :  2021-03-29 11:37
@Author :  ahao
@Version :  1.0
@Description :
"""

import random


def generate_code(code_len=4):
    all_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    last_pops = len(all_chars) - 1
    code = ''
    for _ in range(code_len):
        index = random.randint(0, last_pops)
        code += all_chars[index]
    print(code)
    return code


if __name__ == '__main__':
    generate_code()
