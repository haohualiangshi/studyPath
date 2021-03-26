# 使用while循环打印乘法表

# ceng = 1
# while ceng <= 9:
#     count = 1
#     while count <= ceng:
#         print("{} * {} =".format(count, ceng), count * ceng,end="        ")
#         count += 1
#     print("")
#     ceng += 1


"""
输入M和N计算C(M,N)
"""

m = int(input('m = '))
n = int(input('n = '))
fm = 1
for num in range(1, m + 1):
    fm *= num
fn = 1
for num in range(1, n + 1):
    fn *= num
fmn = 1
for num in range(1, m - n + 1):
    fmn *= num
print(fm // fn // fmn)