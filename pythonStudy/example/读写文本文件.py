"""
@File    :   读写文本文件.py    
@Modify Time :  2021-03-29 17:17
@Author :  ahao
@Version :  1.0
@Description :
"""


def main():
    # f = open('../other_depends_file/致橡树.txt', 'r', encoding='utf-8')
    # print(f.read())
    # f.close()

    # f=None
    # try:
    #     f=open("../other_depends_file/致橡树.txt",'r', encoding='utf-8')
    #     print(f.read())
    # except FileNotFoundError:
    #     print("无法打开制定的文件")
    # except LookupError:
    #     print('未知编码错误')
    # except UnicodeDecodeError:
    #     print('读取文件错误')
    # finally:
    #     if f:
    #         f.close()
    # 通过 with 关键字指定文件对象的上下文环境并在离开上下文环境时自动释放文件资源
    # try:
    #     with open('../other_depends_file/致橡树.txt', 'r', encoding='utf-8') as f:
    #         print(f.read())
    # except FileNotFoundError:
    #     print('无法打开指定的文件')
    # except LookupError:
    #     print('指定了未知的编码')
    # except UnicodeDecodeError:
    #     print('读取文件时解码错误')

    # try:
    #     # 使用for ... in 逐行读取
    #     with open('../other_depends_file/致橡树.txt', 'r', encoding='utf-8') as f:
    #         for line in f:
    #             print(line, end='\t')
    # except FileNotFoundError:
    #     print('无法打开指定的文件')
    # 读取文件按行读取到列表中
    with open('../other_depends_file/致橡树.txt', 'r', encoding='utf-8') as f:
        lines = f.readlines()
        print(lines)

    pass


if __name__ == '__main__':
    main()
