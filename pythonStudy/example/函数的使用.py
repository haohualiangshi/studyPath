"""
函数的使用
"""

from random import randint


def roll_dice(n=2):
    """
    两个骰子的随机数
    :param n: 骰子个数，默认是2
    :return: 摇出来的结果
    """
    total = 0
    for _ in range(n):
        total += randint(1, 6)
    return total


print(roll_dice(2))


def add_num(a=0, b=0, c=0):
    """
    函数默认值是0；我们可以不按顺序；使用键名传值
    :param a:
    :param b:
    :param c:
    :return:
    """
    return a + b + c


print(add_num(1, 2, 3))

print(add_num(c=10, a=1, b=5))
