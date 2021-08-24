/*
 * @Descripttion: Flow原始类型；数组类型；对象类型；函数类型；特殊类型
 * @version: 
 * @Author: ahao
 * @Date: 2021-08-23 14:10:48
 * @LastEditors: ahao
 * @LastEditTime: 2021-08-24 13:58:20
 * @flow
 */
// flow原始类型
const a: string = 'foobar';
const b: number = Infinity //Nan //100
const c: boolean = false //true
const d: null = null
const e: void = undefined;
const f: symbol = Symbol()
// flow数组类型
const arr1: Array<number> = [100, 200];
const arr2: number[] = [1, 2, 3];
const foo: [string, number] = ['foo', 100];//指定特殊宽度和类型的数组

// flow对象类型
const obj1: { foo: string, bar: number } = { foo: 'string', bar: 100 };
// 可选参数
const obj2: { foo?: string, bar: number } = { bar: 100 }


// flow函数类型
function foo2(callback: (string, number) => void) {
    callback('string', 100)
}
foo2(function (str, number) { })



//特殊类型
// 字面量类型
const ab: 'foo' = 'foo';
const type: 'success' | 'warning' | 'danger' = 'danger';

//mixed & any  区别是mixed是强类型；any是弱类型
function passMixed(value:mixed){
    
}
passMixed('string');
passMixed(100);

function passAny(value:any){

}
passAny('string');
passAny(100)
