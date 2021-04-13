"""
@File    :   列表的切片.py    
@Modify Time :  2021-03-26 14:17
@Author :  ahao
@Version :  1.0
@Description :
"""


def main():
    fruits = ['apple', 'grape', 'banana']
    fruits += ['mango', 'pear']
    for fruit in fruits:
        print(fruit.title(), end=' ')
    fruits_2 = fruits[1:3]
    print(fruits_2)
    fruits_3 = fruits
    fruits_4 = fruits[:]
    # 没有创建新的列表；只是创建新的引用
    print(fruits_3)
    fruits[0] = 'origin'
    print(fruits)
    print(fruits_3)
    # 可以通过完整切片操作来复制列表
    print(fruits_4)
    print(fruits[-4:-1])
    print(fruits_4[::-1])




if __name__ == '__main__':
    main()
