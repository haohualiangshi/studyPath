/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-22 16:13:18
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-23 14:46:04
 */


// const describe = require('chai');

import getTag from "../../base/getTag";
// import describe from 'chai';
describe("getTag test", function() {
    it("should [object Array] when getTag([1,2,3]) return", function() {
        console.log(getTag([1, 2, 3]));
        expect(getTag([1, 2, 3])).to.equal('[object Array]');
    });
});