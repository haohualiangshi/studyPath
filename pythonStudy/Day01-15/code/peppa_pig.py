"""
@File    :   peppa_pig.py.py    
@Modify Time :  2021-04-01 10:18
@Author :  ahao
@Version :  1.0
@Description : 绘制小猪佩琦
"""

from turtle import *
import turtle


def nose(x, y):
    turtle.penup()
    turtle.goto(x, y)
    turtle.pendown()
    turtle.setheading(-30)
    turtle.begin_fill()
    a = 0.4
    for i in range(120):
        if 0 <= i < 30 or 60 <= i < 90:
            a = a + 0.08
            turtle.left(3)
            turtle.forward(a)
        else:
            a = a - 0.08
            turtle.left(3)
            turtle.forward(a)
    turtle.end_fill()
    turtle.penup()
    turtle.setheading(90)
    turtle.forward(25)
    turtle.setheading(0)
    turtle.forward(10)
    turtle.pendown()
    #     设置画笔的颜色
    turtle.pencolor(255, 155, 192)
    turtle.setheading(10)
    turtle.begin_fill()
    turtle.circle(5)
    turtle.color(160, 82, 45)
    turtle.end_fill()
    turtle.penup()
    turtle.setheading(0)
    turtle.forward(20)
    turtle.pendown()
    turtle.pencolor(255, 155, 192)
    turtle.setheading(10)
    turtle.begin_fill()
    turtle.circle(5)
    turtle.color(160, 82, 45)
    turtle.end_fill()


def head(x, y):
    """画头"""
    turtle.color((255, 155, 192), 'pink')
    turtle.penup()
    turtle.goto(x, y)
    turtle.setheading(0)
    turtle.pendown()
    turtle.begin_fill()
    turtle.setheading(180)
    turtle.begin_fill()
    turtle.setheading(180)
    turtle.circle(300, -30)
    turtle.circle(100, -60)
    turtle.circle(80, -100)
    turtle.circle(150, -20)
    turtle.circle(60, -95)
    turtle.setheading(161)
    turtle.circle(-300, 15)
    turtle.penup()
    turtle.pendown()
    turtle.setheading(-30)
    a = 0.4
    for i in range(60):
        if 0 <= i < 30 or 60 <= i < 90:
            a = a + 0.08
            turtle.lt(3)
            turtle.fd(a)
        else:
            a = a - 0.08
            turtle.lt(3)
            turtle.fd(a)
    turtle.end_fill()

def ears(x,y):
    """画耳朵"""
    turtle.color((255,155,192),'pink')
    turtle.penup()
    turtle.goto(x,y)
    turtle.pendown()
    turtle.begin_fill()
    turtle.setheading(100)
    turtle.circle(-50,50)
    turtle.circle(-10,120)
    turtle.circle(-50,54)
    turtle.end_fill()
    turtle.penup()
    turtle.setheading(90)
    turtle.forward(-12)
    turtle.setheading(0)
    turtle.forward(30)
    turtle.pendown()
    turtle.begin_fill()
    turtle.setheading(100)
    turtle.circle(-50,50)
    turtle.circle(-10,120)
    turtle.circle(-50,56)
    turtle.end_fill()

    pass

def eyes(x,y):
    """画眼睛"""
    turtle.color((255,155,192),'white')
    turtle.penup()
    turtle.setheading(90)
    turtle.forward(-20)
    turtle.setheading(0)
    turtle.forward(-95)
    turtle.pendown()
    turtle.begin_fill()
    turtle.circle(15)
    turtle.end_fill()
    turtle.color('black')
    turtle.penup()
    turtle.setheading(90)
    turtle.forward(12)
    turtle.setheading(0)
    turtle.forward(-3)
    turtle.pendown()
    turtle.begin_fill()
    turtle.circle(3)
    turtle.end_fill()
    turtle.color((255,155,192),'white')
    turtle.penup()
    turtle.seth(90)

    turtle.forward(-25)
    turtle.seth(0)
    turtle.forward(40)
    turtle.pendown()
    turtle.begin_fill()
    turtle.circle(15)
    turtle.end_fill()
    turtle.color('black')
    turtle.penup()
    turtle.setheading(90)
    turtle.forward(12)
    turtle.setheading(0)
    turtle.forward(-3)
    turtle.pendown()
    turtle.begin_fill()
    turtle.circle(3)
    turtle.end_fill()

def cheek(x,y):
    """画脸颊"""
    turtle.color((255,155,192))
    turtle.penup()
    turtle.goto(x,y)
    turtle.pendown()
    turtle.setheading(0)
    turtle.begin_fill()
    turtle.circle(30)
    turtle.end_fill()

def mouth(x,y):
    turtle.color(239,69,19)
    turtle.penup()
    turtle.goto(x,y)
    turtle.pendown()
    turtle.setheading(-80)
    turtle.circle(30,40)
    turtle.circle(40,80)


def setting():
    """det param"""
    turtle.pensize(4)
    turtle.hideturtle()
    turtle.colormode(255)
    turtle.color((255,155,192),'pink')
    turtle.setup(840,500)
    turtle.speed(10)



def main():
    setting()
    nose(-100,100)
    head(-69,167)
    ears(0,160)
    eyes(0,140)
    cheek(80,10)
    mouth(-20,30)
    done()

if __name__=='__main__':
    main()

























