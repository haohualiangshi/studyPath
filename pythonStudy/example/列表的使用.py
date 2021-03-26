"""
@File    :   列表的使用.py    
@Modify Time :  2021-03-26 13:50
@Author :  ahao
@Version :  1.0
@Description :
"""


def main():
    list_1 = [1, 2, 3, 4, 5, 6]
    print(list_1)
    list_2 = ['hello'] * 5
    print(list_2)
    print(len(list_1))
    print(list_1[1])
    print(list_1[3])
    print(list_1[-1])
    list_1[len(list_1) - 1] = 50
    print(list_1)
    # 添加元素

    list_1.append(6)
    list_1.insert(1, 20)
    print(list_1)
    list_1 += [10, 30]
    print(list_1)
    list_1.remove(2)
    print(list_1)
    if 10 in list_1:
        list_1.remove(10)
    print(list_1)
    del list_1[0]
    print(list_1)
    list_1.clear()
    print(list_1)


if __name__ == '__main__':
    main()
