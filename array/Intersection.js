"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 数组交集
 * example: intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
 * args: a -> 数组； b -> 数组
 * */
var Intersection = function (a, b) {
    // @ts-ignore
    var s = new Set(b);
    return a.filter(function (x) { return s.has(x); });
};
exports.default = Intersection;
