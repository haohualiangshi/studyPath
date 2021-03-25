# 使用while循环打印乘法表

ceng = 1
while ceng <= 9:
    count = 1
    while count <= ceng:
        print("{} * {} =".format(count, ceng), count * ceng,end="        ")
        count += 1
    print("")
    ceng += 1
