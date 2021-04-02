"""
@File    :   SortAlgorithm.py    
@Modify Time :  2021-03-30 17:32
@Author :  ahao
@Version :  1.0
@Description : 排序算法
"""
import time


class SortAlgorithm():

    @staticmethod
    def select_sort(origin_items, comp=lambda x, y: x < y):
        """简单选择排序"""
        items = origin_items[:]
        for i in range(len(items) - 1):
            min_index = i
            for j in range(i + 1, len(items)):
                if comp(items[j], items[min_index]):
                    min_index = j
                    items[i], items[min_index] = items[min_index], items[i]
        return items

    @staticmethod
    def bubble_sort(origin_items, comp=lambda x, y: x < y):

        items = origin_items[:]
        for i in range(len(items)):
            """简单的冒泡排序"""
            for j in range(1, len(items) - i):
                if comp(items[j], items[j - 1]):
                    items[j], items[j - 1] = items[j - 1], items[j]

        # for i in range(len(items)-1):
        #     """高质量的冒泡排序（搅拌排序）"""
        #     swapped = False
        #     for j in range(i, len(items) - 1 - i):
        #         if comp(items[j], items[j + 1]):
        #             items[j], items[j + 1] = items[j + 1], items[j]
        #             swapped = True
        #     if swapped:
        #         swapped = False
        #         for j in range(len(items) - 2 - i, i, -1):
        #             if comp(items[j - 1], items[j]):
        #                 items[j], items[j - 1] = items[j - 1], items[j]
        #                 swapped = True
        #         if not swapped:
        #             break
        return items

    @classmethod
    def merge_sort(cls, items, comp=lambda x, y: x <= y):
        """归并排序"""
        if len(items) < 2:
            return items[:]
        mid = len(items) // 2
        left_list = cls.merge_sort(items[:mid], comp)
        right_list = cls.merge_sort(items[mid:], comp)

    @staticmethod
    def merge(items1, items2, comp):
        """合并（将两个有序的列表合并成一个有序的列表）"""
        items = []
        index1, index2 = 0, 0
        while index1 < len(items1) and index2 < len(items2):
            if comp(items1[index1], items2[index2]):
                items.append(items1[index1])
                index1 += 1
            else:
                items.append(items2[index2])
        items += items1[index1:]
        items += items2[index2:]
        return items


if __name__ == '__main__':
    test_arr = [1, 2, 5, 3, 78, 6, 75, 8, 55, 9, 15]
    # result_arr = SortAlgorithm.select_sort(test_arr)
    # result_arr = SortAlgorithm.select_sort(test_arr, lambda x, y: x > y)
    start = time.time()
    result_arr = SortAlgorithm.bubble_sort(test_arr)
    end = time.time()
    print(end - start)
    print(result_arr)
