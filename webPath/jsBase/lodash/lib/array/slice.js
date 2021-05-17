/*
 * @Descripttion: 从一个旧数组里截取新的数组；包前不包后
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-25 20:07:55
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-26 11:01:36
 */
const slice = (array = [], start = 0, end) => {
    let length = array === null ? 0 : array.length;
    if (!length) {
        return [];
    }
    start = start == null ? 0 : start;
    end = end == undefined ? length : end;
    if (start < 0) {
        start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;
    let index = -1;
    const result = new Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}
export default slice;