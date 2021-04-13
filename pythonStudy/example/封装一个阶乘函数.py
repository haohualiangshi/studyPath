"""
使用函数封装一个阶乘

"""


def factorial(n):
    result = 1
    for num in range(1, n + 1):
        result *= num
        return result


print(factorial(7) // factorial(3) // factorial(4))
