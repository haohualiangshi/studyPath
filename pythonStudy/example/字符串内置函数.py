# 字符串内置函数

# 大小写相关的
# capitalize()  title() upper() lower() isTitle() isUpper() isLower() swapcase()
message = "This is ahao's python"

print(message.capitalize()) #将字符串的第一个字符转为大写

print(message.title())

print(message.upper())

print(message.lower())
print(message.istitle())
print(message.swapcase())
print(len(message))
print(message.count("t"))
print(message.startswith("t"))
print(message.endswith("T"))

test_str = "thisisa12"
print(test_str.isalnum())

test_str="thisis阿豪"
print(test_str.isalpha())
test_str_2="30"
print(test_str.isdigit())
print(test_str_2.isdigit())

# 查找与替换相关的字符

# find()  rfind() lfind() index() rindex() lindex() replace()

# test_str="find and replace function test!"
# print("f" in test_str)
# print(test_str.find("t")) #返回第一个下标，未找回则返回-1
# print(test_str.find("z"))

