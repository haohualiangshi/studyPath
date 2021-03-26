"""
Craps赌博游戏
玩家摇两颗色子 如果第一次摇出7点或11点 玩家胜
如果摇出2点 3点 12点 庄家胜 其他情况游戏继续
玩家再次要色子 如果摇出7点 庄家胜
如果摇出第一次摇的点数 玩家胜
否则游戏继续 玩家继续摇色子
玩家进入游戏时有1000元的赌注 全部输光游戏结束

"""

from random import randint

money = 1000
while money > 0:
    print("account money=", money)
    need_go_on = False
    debt = 0
    while True:
        debt = int(input("请输入下注金额："))
        if debt > 0 and debt <= money:
            break

    # 玩家摇两颗色子
    first_num = randint(1, 6) + randint(1, 6)
    print("玩家第一次摇出的点数：%d" % first_num)

    # 第一次摇出7点或11点 玩家胜
    if first_num == 7 or first_num == 11:
        print("玩家胜")
        money += debt
    elif first_num == 2 or first_num == 3 or first_num == 12:
        # 摇出2点 3点 12点 庄家胜
        print("庄家胜")
        money -= debt
    else:
        # 其他情况游戏继续
        print("平局；继续")
        need_go_on = True

    while need_go_on:
        print("yun xing ci shu ")
        next_num = randint(1, 6) + randint(1, 6)
        print("玩家第二次摇出的点数是：%d" % next_num)
        if next_num == 7:
            print("庄家胜")
            money -= debt
            need_go_on = False
        elif next_num == first_num:
            print("玩家胜")
            money += debt
            need_go_on = False
        else:
            print("平局，继续")
            need_go_on = True
print("结束后的金额是：%d" % money)
