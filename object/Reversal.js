"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 反转对象的键值对
 * example: reversal({ name: 'John', age: 20 }); // { 20: 'age', John: 'name' }
 * args: obj
 * */
var Reversal = function (obj) { return Object.keys(obj).reduce(function (acc, key) { acc[obj[key]] = key; return acc; }, {}); };
exports.default = Reversal;
