# -*- coding: utf-8 -*-

# print("Hello python")
# print("Hard hard study ;day day up")
# name = input('plz enter your name:')
# print('Hello ',name);
# firstNum = input("plz enter first num:")
# secondNum = input("plz enter second num:")
# result = firstNum*secondNum
# print(result)

# a = 'ABC'
# b = a
# a = 'XYZ'
# print(b)
# print(a)

# print(10/3)
# print(9/3)
# print(10//3)
# print(9//3)
# print(9 % 3)
# print(10 % 3)

# print(ord("中"))
# print(ord("国"))
# print(chr(88))
# print(chr(99))
# print('中文'.encode('utf-8'))
# print('abc'.encode('ascii'))
# print(b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8'))
# print(len('zhong'))
# print(len('中文'))
# print('%2d-%02d' % (3000, 10000))
# print('%.2f' % 3.1415926)

# print('Hello , {0};成绩提升了 {1:.1f}%'.format('夏明',20.555))

# s1 = 75
# s2 = 90.88
# r = s2-s1
# # print("{0} 成绩提升了,{1:.1f}%".format('小明', r))

# print("%s 成绩提升了,%.1f" % ('小明', r))

# testList = ['Hello', 'python']
# print(testList[0])
# print(testList[1])
# print(testList[-1])

# print(testList.append('zhang'))
# print(testList.insert(1,'hao'))
# print(testList.pop())
# print(testList.pop(1))
# print(testList);

# age=18
# if age>18:
#   print('age is old than 18')
#   print('adult')
# elif age==18:
#   print('age is equal 18')
# else:
#   print('age is little than 18')

# height = int(input("请输入身高CM："))
# weight = int(input('请输入体重kg：'))
# # print(weight/(height/100)**2)
# result = float('%.1f' % (weight/(height/100)**2))

# if result<18.5:
#   print("过轻")
# elif result<25:
#   print("正常")
# elif result<28:
#   print("过重")
# elif result<32:
#   print("肥胖")
# else:
#   print("严重肥胖")


# def addTotal(a,b):
#   return a+b

# print(addTotal(1,3))

# def power(x):
#     return x*x


# print(power(5))

# def fact_iter(num, product):
#     if(num == 1):
#         return product
#     return fact_iter(num-1, product*num)


# def fact(num):
#     return fact_iter(num, 1)

# print(fact(5))

test_list = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11]
# slice操作符
# print(test_list[:2])
# print(test_list[1:3])
# print(test_list[-5:3])
print(test_list[:10:3])
