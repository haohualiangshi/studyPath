/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-22 16:13:18
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-25 20:04:26
 */


// const describe = require('chai');

import getTag from "../../lib/base/getTag";
import isObjectLike from '../../lib/base/isObjectLike';
import isSymbol from "../../lib/symbol/isSymbol";
import isObject from "../../lib/object/isObject";
import isArguments from '../../lib/base/isArguments';
import isArray from '../../lib/base/isArray';
import isArrayLike from '../../lib/base/isArrayLike';
import isArrayLikeObject from '../../lib/base/isArrayLikeObject';
import isBoolean from '../../lib/base/isBoolean';
import toFinite from '../../lib/number/toFinite';
import toNumber from '../../lib/number/toNumber';
import toInteger from '../../lib/number/toInteger';

// import describe from 'chai';
describe("getTag test", function() {
    it("should [object Array] when getTag([1,2,3]) return", function() {
        console.log(getTag([1, 2, 3]));
        expect(getTag([1, 2, 3])).to.equal('[object Array]');
    });
});

describe('isObjectLike test', () => {
    it('isObjectLike({}) return true', () => {
        expect(isObjectLike({})).to.equal(true);
    })
})

describe('isArguments test', () => {
    it('isArguments(function(){return arguments}()) return true', () => {
        expect(isArguments(function() { return arguments }())).to.equal(true)
    })
    it('isArguments([1,3,4]) return false', () => {
        expect(isArguments([1, 3, 4])).to.equal(false)
    })
})

describe('isArray test', () => {
    it('isArray([1,3,4]) return true', () => {
        expect(isArray([1, 3, 4])).to.equal(true);
    })
    it('isArray(document.body.children) return false', () => {
        expect(isArray(document.body.children)).to.equal(false);
    })
})

describe('isArrayLike test', () => {
    it('isArrayLike([1,3,4,5]) return false', () => {
        expect(isArrayLike([1, 3, 4, 5])).to.equal(true)
    })
    it('isArrayLike(Function) return false', () => {
        expect(isArrayLike(Function)).to.equal(false)
    })
})



describe('isSymbol test', () => {
    it('isSymbol({}) return value is false', () => {
        console.log(isSymbol({}))
        expect(isSymbol({})).to.equal(false);
    })
})
describe('isObject test', () => {
    it('isObject test', () => {
        console.log('isObject({}) return ', isObject({}));
        console.log('isObject([1,3] return ', isObject([1, 3]));
        console.log('isObject(1) return ', isObject(1));
        expect(isObject([1, 3])).to.equal(true)
    })
})
describe('toFinite test', () => {
    it('toFinite(888888888888) return value is 888888888888', () => {
        console.log('toFinite(Infinity)', toFinite(Infinity));
        expect(toFinite(888888888888)).to.equal(888888888888);
    })
})
describe('toNumber test', () => {
    it('toNumber("3.14") return 3.14', () => {
        console.log('toNumber(0x10)=', toNumber(0x10));
        console.log('toNumber(0b10)=', toNumber(0b10));
        console.log('toNumber(0o10)=', toNumber(0o10));
        console.log('toNumber(function(){return 30}=', toNumber(function() { return 30 }))
        expect(toNumber('3.14')).to.equal(3.14);
    })
})

describe('toInteger test', () => {
    it('toInteger("3.3333") return 3', () => {
        console.log('toInteger(3.3333)', toInteger(3.3333));
        expect(toInteger(3.3333)).to.equal(3);
    })
})