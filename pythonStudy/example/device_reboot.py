import os
import re

app_cloner_name = "App Cloner_v2.1.1.apk"


def get_device_id():
    str_init = ' '
    try:
        all_info = os.popen('adb devices').readlines()
        print('adb devices 输出的内容是：', all_info)

        for i in range(len(all_info)):
            str_init += all_info[i]
        devices_name = re.findall('\n(.+?)\t', str_init, re.S)
    except Exception as e:
        print(f"---get_device_id---Exception={e}")
        devices_name = []
        pass
    return devices_name


def install_app_cloner(device_id_, apk_path_):
    # install shop最新的apk
    print("---start---install---")
    cmd_install = f'adb -s {device_id_} install "{apk_path_}"'
    print(f"---cmd_install---{cmd_install}")
    os.system(cmd_install)
    print("---end---install---")
    pass

def devices_reboot(device_id):
    print("******reboot device*******")
    cmd_install = f'adb -s {device_id} shell reboot'
    print(f"---cmd_install---{cmd_install}")
    os.system(cmd_install)



if __name__ == '__main__':
    # base_dir = os.getcwd()
    # print(f"---base_dir={base_dir}")
    #
    # apk_dir = fr"{base_dir}\data"
    #
    # print(f"---apk_path={apk_dir}")
    #
    device_list = get_device_id()

    # 安装 APP Cloner apk
    # apk_cloner_path = fr"{apk_dir}\{app_cloner_name}"
    for device_id in device_list:
        # install_app_cloner(device_id, apk_cloner_path)
        devices_reboot(device_id)
        pass
    pass
