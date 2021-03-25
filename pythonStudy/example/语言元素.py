"""
使用变量进行算数运算
"""
a = 3
b = 4
print("a+b=%d" % (a + b))
print("a-b=%d" % (a - b))
print("a*b=%d" % (a * b))
print("a/b=%d" % (a / b))
print("a//b=%d" % (a // b))
# print("a%b=%d" % (a % b))
print(a % b)
print("a**b=%d" % (a ** b))

"""
使用type()检查变量
"""
c = 1.2
d = 1 + 5j
d = "hello python"
e = True

print(type(a))
print(type(c))
print(type(d))
print(type(e))


"""
华氏温度转摄氏温度
"""

f=float(input("请输入华氏温度："))
c=(f-32)/1.8
print('%.1f华氏度=%.1f摄氏度'%(f,c))


