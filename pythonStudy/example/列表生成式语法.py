"""
@File    :   列表生成式语法.py    
@Modify Time :  2021-03-26 19:03
@Author :  ahao
@Version :  1.0
@Description :
"""
import sys


def main():
    f = [x for x in range(1, 10)]
    print(f)
    f = [x + y for x in 'ABCDE' for y in '12345']
    print(f)
    print(sys.getsizeof(f))
    # 请注意下面的代码创建的不是一个列表而是一个生成器对象
    # 通过生成器可以获取到数据但它不占用额外的空间存储数据
    # 每次需要数据的时候就通过内部的运算得到数据(需要花费额外的时间)
    f = (x + y for x in 'ABCED' for y in '12345')
    print(f)
    print(sys.getsizeof(f))


def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
        yield a


if __name__ == "__main__":
    main()
    for val in fib(20):
        print(val)