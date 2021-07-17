"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 返回数组中N个最大元素
 * example: maxN([1, 2, 3]); // [3]
 *          maxN([1, 2, 3], 2); // [3, 2]
 * args: arr -> 数组； n -> 返回几个
 * */
var MaxN = function (arr, n) {
    if (n === void 0) { n = 1; }
    return __spreadArray([], arr).sort(function (a, b) { return b - a; }).slice(0, n);
};
exports.default = MaxN;
