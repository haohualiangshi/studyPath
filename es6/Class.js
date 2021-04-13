/*
 * @Author: ahao 
 * @Date: 2020-10-09 14:53:21 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-10-09 15:19:21
 * Class 的基本知识
 */

// 静态成员
function Phone(){

}
Phone.name = "Nokia";
Phone.change = function (){
  console.log("我可以改变世界");
}
// name 和change是构造函数的属性和方法；并不是实例对象的方法
const phone = new Phone();
console.log(phone.name);
Phone.prototype.size = "5.5";
console.log(phone.size);

class Huawei {
  constructor(){

  }
  // static name:'zhang'
  // static name = "huawei";
}
const huawei1 = new Huawei();
console.log(huawei1.name);
console.log(Huawei.name);
