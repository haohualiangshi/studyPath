"""

找出100~999之间的所有水仙花数
水仙花数是各位立方和等于这个数本身的数
如: 153 = 1**3 + 5**3 + 3**3

"""

for num in range(100, 1000):
    one_place = num % 10
    ten_place = num // 10 % 10
    hundreds_place = num // 100
    if num == one_place**3+ten_place**3+hundreds_place**3:
        print(num)
