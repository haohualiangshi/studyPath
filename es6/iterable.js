/*
 * @Author: ahao 
 * @Date: 2020-08-14 13:52:42 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-08-14 14:03:24
 * 迭代器；自定义便利
 */

const banji = {
  name: '终极一班',
  items: ["zhang", "qing", "hao", "li"],
  [Symbol.iterator] () {
    let index = 0;
    return {
      next: () => {
        let result = {};
        if (index < this.items.length) {
          result.value = this.items[index];
          result.done = false;
          index++;
        } else {
          result = {
            value: undefined,
            done: true
          }
        }
        return result;
      }
    }
  }

}
for (let val of banji) {
  console.log(val);
}