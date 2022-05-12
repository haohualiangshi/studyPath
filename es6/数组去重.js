/*
 * @Descripttion: js数组去重的方式
 * @version: 
 * @Author: ahao
 * @Date: 2022-05-06 09:15:04
 * @LastEditors: ahao
 * @LastEditTime: 2022-05-08 21:44:51
 */
// 使用Set()+Array.from()；使用该方式对NaN和undefined类型去重也是有效的；是因为NaN和undefined都可以被存储在Set中，NaN被视为相同的值
const arr = [1, 3, 3, 'abc', 'abc', true, true, false, undefined, NaN, undefined, NaN];
const result1 = Array.from(new Set(arr));
console.log(arr);
console.log(result1);

// 利用两层循环+数组的splice方法：通过两层循环对数组元素进行逐一比较，然后通过splice方法来删除重复的元素，但是无法对NaN进行去重
const removeDuplicate = (arr) => {
    let len = arr.length;
    for (let outerIndex = 0; outerIndex < len; outerIndex++) {
        for (let innerIndex = outerIndex + 1; innerIndex < len; innerIndex++) {
            if (arr[outerIndex] === arr[innerIndex]) {
                arr.splice(innerIndex, 1);
                len--;
                innerIndex--;
            }
        }
    }
    return arr;
}
console.log(removeDuplicate(arr));
console.log(arr);

// 利用数组的indexOf或者includes方法；新建一个空数组，遍历需要去重的数组，将数组元素存入新数组中，存放前贩毒案数组中是否已经含有当前元素；没有则存入；无法判断NaN

const removeDuplicate2 = (arr) => {
    const tempArr = [];
    arr.forEach((item) => {
        // if (tempArr.indexOf(item) === -1) {
        // 使用includes能够检测到数组包含NaN
        if (!tempArr.includes(item)) {
            tempArr.push(item);
        }
    })
    return tempArr;
}
const testArr2 = [1, 1, 1, undefined, null, 'aaa', true, true, false, 'aaa', NaN, NaN];
console.log(removeDuplicate2(testArr2));


// 利用数组的filter+indexOf;该输出结果不包含NaN；因为indexOf无法对NaN进行判断
const removeDuplicate3 = (arr) => {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}
console.log(testArr2)
console.log(removeDuplicate3(testArr2));


// 利用Map

const removeDuplicate4 = (arr) => {
    const map = new Map();
    const newArr = [];
    arr.forEach(item => {
        if (!map.has(item)) {
            map.set(item, true);
            newArr.push(item);
        }
    })
    return newArr;
}
console.log(testArr2);
console.log(removeDuplicate4(testArr2));

// 利用对象的键唯一性处理；和Map差不多
const removeDuplicate5 = (arr) => {
    const tempArr = [];
    const tempObj = {};
    arr.forEach((item) => {
        if (!tempObj[item]) {
            tempObj[item] = true;
            tempArr.push(item)
        }
    })
    return tempArr;
}
console.log(testArr2);
console.log(removeDuplicate5(testArr2));

