# 赋值运算符
name = 'admin'
name1 = name
print(id(name), name)
print(id(name1), name1)
# id()返回内存地址

num = 5
print(id(num), num)
num += 5
print(id(num), num)
num -= 5
print(id(num), num)
# 算数运算符+-*/
# 扩展的算数运算符 **幂次方 //求整 %求余

a = 9
b = 2
result = a + b
print("a+b=", result, type(result))
result = a - b
print("a-b=", result)
result = a * b
print('a*b=', result)
result = a / b
print('a/b=', result)
result = a ** b
print('a**b=', result)
result = a // b
print("a//b=", result)
result = a % b
print("a%b", result)

# 逻辑运算符 and or not
print(a < 1 or 3)

# 进制转换
result = bin(a)  # 返回结果是个字符串类型

print(result, type(result))
result = 0b1011
result1 = int(result)
print(str(result1))
c = 0x19
print(c)

# 三目运算
# python的格式：结果 if 表达式 else 结果
result = (a + b) if a > b else (b - a)
print(result)
result = (a + b) if a < b else (b - a)
print(result)
