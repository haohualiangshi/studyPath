# 使用+号拼接
person = 'ahao'
address = 'beijing'
phone = '88888'
num = 99
# +号只适用全是字符串的拼接
print('订单的收件人：' + person + '地址是：' + address + '手机号是：' + phone)
# 使用占位显示；适用于并不是全是字符串
print('订单的收件人是：%s,收货地址是：%s,联系方式是：%s,数量：%s' % (person, address, phone, num))
# 使用字符创的 ''.format()方式格式化字符创
print("订单的收件人：{},地址：{},联系方式：{},订单数量：{}".format(person, address, phone, num))
