"""
用户身份验证
"""
import getpass

# user_name = input('请输入用户名：')
# pwd = input('请输入密码;')
# # pwd = getpass.getpass("请输入密码：")
# # getpass模块只能用于命令行界面！^_^
# if user_name == 'ahao' and pwd == '123456':
#     print('login success')
# else:
#     print('user name or pwd error')


"""

使用if。。。。elif。。。else分段函数求值

"""

# x = float(input('x='))
# if x > 1:
#     print('y=%.2f' % (3 * x - 5))
# elif x >= -1 and x <= 1:
#     print('y=%.2f' % (x + 2))
# else:
#     print('y=%.2f' % (5 * x + 2))

x = float(input('x = '))
if x > 1:
    y = 3 * x - 5
else:
    if x >= -1:
        y = x + 2
    else:
        y = 5 * x + 3
print('f(%.2f) = %.2f' % (x, y))
