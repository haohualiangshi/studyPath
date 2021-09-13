/*
 * @Descripttion: typescript数据类型
 * @version: 
 * @Author: ahao
 * @Date: 2021-08-25 14:29:59
 * @LastEditors: ahao
 * @LastEditTime: 2021-08-27 13:46:23
 */

// 原始类型
const a: string = 'foobar';
const b: number = 100; //NAN
const c: boolean = true;

// 非严格模式赋值否可以为null；严格模式不行
// const d: boolean = null;
const e: void = undefined;
const f: null = null;
const g: undefined = undefined;
const h: symbol = Symbol();

// 对象类型和数组类型

const arr1: Array<number> = [1, 2];

function sum(...args: number[]) {
    return args.reduce((prev, current) => prev + current, 0);
}
console.log(sum(1, 3, 4))

// 元组类型
const tuple: [number, string] = [18, 'string'];
const [age, nameStr] = tuple;

// 枚举类型
enum PostStatus {
    Draft,
    Unpublished,
    published,
}
const post = {
    status: PostStatus.Draft
}
console.log(post.status);

// 函数类型
function fun1(a: number, b: number): string {
    return 'func1'
}


