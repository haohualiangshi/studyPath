"""
@File    :   定义类.py    
@Modify Time :  2021-03-29 16:36
@Author :  ahao
@Version :  1.0
@Description :
"""


class Student(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def study(self, course_name):
        print("%s正在学习%s." % (self.name, course_name))


if __name__ == '__main__':
    ahao = Student('ahao', 30)
    ahao.study('python')
