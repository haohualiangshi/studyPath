"""
@File    :   集合.py    
@Modify Time :  2021-03-29 10:41
@Author :  ahao
@Version :  1.0
@Description :
"""


def main():
    set1 = {1, 2, 2, 3, 3, 3, 4, 4, 5}
    print(set1)
    print('Length=', len(set1))

    set_2 = set(range(1, 10))
    print(set_2)
    set1.add(6)
    set1.add(7)
    set_2.update([11, 12])
    print(set1)
    print(set_2)
    # remove的元素如果不存在会引发KeyError
    set1.discard(4)
    if 1 in set1:
        set1.remove(1)
    print(set1)

    #     将元组转为集合
    set_3 = set((1, 3, 4, 5, 6))
    print(set_3.pop())
    print(set_3)

    #     集合的交集，并集，差集，对称差运算
    print(set1)
    print(set1 & set_3)
    print(set1.intersection(set_3))
    print(set1 | set_3)
    print(set1.union(set_3))
    print(set_3 - set1)
    print(set1.difference(set_3))
    print(set1 ^ set_3)
    print(set1.symmetric_difference(set_3))


if __name__ == "__main__":
    main()
