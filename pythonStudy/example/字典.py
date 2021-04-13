"""
@File    :   字典.py    
@Modify Time :  2021-03-29 11:07
@Author :  ahao
@Version :  1.0
@Description :
"""


def main():
    scores = {'first': 5, 'second': 4, 'result': True}
    print("num {} and num {} = 9 is {} ?".format(scores["first"], scores["second"], scores["result"]))
    scores['first'] = 6
    scores.update(third=99, forth=100)
    print(scores)
    # scores.popitem()
    # print(scores)
    scores.pop('first',100)
    print(scores)
    scores.clear()
    print(scores)


if __name__ == "__main__":
    main()
