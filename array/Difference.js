"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 数组差集
 * describe: 返回两个数组之间的差异
 * example: difference([1, 2, 3], [1, 2, 4]); // [3, 4]
 * args: a -> 数组1；b -> 数组2
 * */
var Difference = function (a, b) {
    // @ts-ignore
    var sA = new Set(a), sB = new Set(b);
    return __spreadArray(__spreadArray([], a.filter(function (x) { return !sB.has(x); })), b.filter(function (x) { return !sA.has(x); }));
};
exports.default = Difference;
