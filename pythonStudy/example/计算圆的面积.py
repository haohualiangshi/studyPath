"""
计算圆的周长和面积
"""
import math

radius=float(input("请输入圆的半径："))
perimiter=2*math.pi*radius
area=math.pi*(radius**2)
print('周长：%.2f'%perimiter)
print('面积：%.2f'%area)

