/*
 * @Descripttion: 快速上手
 * @version:
 * @Author: ahao
 * @Date: 2021-08-25 10:33:07
 * @LastEditors: ahao
 * @LastEditTime: 2022-05-30 10:33:20
 */

const hello = (name: string) => {
  console.log(`Hello, ${name}`);
};
hello("ahao");
// const num:number='';
const firstName: string = "Captain";
const familyName: string = String("zhang");
const fullName = `my name is ${familyName} ${firstName}`;
console.log(fullName);

const integer: number = 6;
const integer2: number = Number(42);
const decimal: number = 3.14;
const binary: number = 0b1010;
const octal: number = 0o744;
const hex: number = 0xf00d;
const big: bigint = 100n;
console.log(binary, octal, hex, big);
