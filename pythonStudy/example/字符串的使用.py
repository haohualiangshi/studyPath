"""
@File    :   字符串的使用.py    
@Modify Time :  2021-03-26 13:32
@Author :  ahao
@Version :  1.0
@Description :
"""


def main():
    str1 = 'hello world!'
    print(len(str1))
    print(str1.capitalize())
    print(str1.upper())
    print(str1.find('or'))
    print(str1.find("shit"))
    print(str1.startswith('Hi'))
    print(str1.endswith('!'))
    print(str1.center(50, '*'))
    print(str1.rjust(50, '&'))

    str2 = 'abc123456'
    print(str2[2])
    print(str2[2:5])
    print(str2[2:])
    print(str2[2::2])
    print(str2[::2])
    print(str2[::-1])
    print(str2[-3:-1])
    print(str2.isdigit())
    print(str2.isalpha())
    print(str2.isalnum())
    str3 = ' 000 00 00 '
    print(str3.strip())



if __name__ == '__main__':
    main()
