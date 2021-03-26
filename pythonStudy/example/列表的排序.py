"""
@File    :   列表的排序.py    
@Modify Time :  2021-03-26 14:29
@Author :  ahao
@Version :  1.0
@Description :
"""


def main():
    list1 = ['orange', 'apple', 'zoo', 'internationlization', 'blueberry']
    list2 = sorted(list1)
    print(list1)
    print(list2)
    list3 = sorted(list1, reverse=True)
    print(list3)
    list4 = sorted(list1, key=len)
    print(list4)
    list4 = sorted(list1, key=len, reverse=True)
    print(list4)
    # 关键字参数key和reverse在sort函数内部处理方式有优先级
    list5 = sorted(list1, reverse=True, key=len)
    print(list5)
    pass


if __name__ == '__main__':
    main()
