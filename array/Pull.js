"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 删除数组中指定的值
 * example: pull(['a', 'b', 'c'], 'a', 'b'); // ['c']
 * args: arr -> 数组； ...args -> 数组当中元素
 * */
var Pull = function (arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var argState = Array.isArray(args[0]) ? args[0] : args;
    var pulled = arr.filter(function (v, i) { return !argState.includes(v); });
    arr.length = 0;
    pulled.forEach(function (v) { return arr.push(v); });
    return arr;
};
exports.default = Pull;
