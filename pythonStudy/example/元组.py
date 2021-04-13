"""
@File    :   元组.py    
@Modify Time :  2021-03-26 19:12
@Author :  ahao
@Version :  1.0
@Description :
"""


def main():
    t = ('aho', 30, True, 'henan')
    print(t)
    print(type(t))
    print(t[1])
    for member in t:
        print(member)
    person=list(t)
    print(person)
    # t1=tuple(list)
    # print(t1)
    list_2=['ahao',30,'qianduan']
    print(tuple(list_2))


if __name__ == '__main__':
    main()
