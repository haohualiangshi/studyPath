list_1 = ['aaa', 'bb', 'ccc']
list_2 = []
list_3 = []
print(id(list_1))
print(id(list_2))
print(id(list_3))
print(list_1[0])
print(list_1[-1])

list_len = len(list_1)
i = 0
while i < list_len:
    if 'a' in list_1[i] or 'b' in list_1[i]:
        del list_1[i]
        list_len -= 1
        # i-=1
    i += 1
print(list_1)
