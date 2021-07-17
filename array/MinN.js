"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 返回数组中N个最小元素
 * example: minN([1, 2, 3]); // [1]
 *          minN([1, 2, 3], 2); // [1, 2]
 * args: arr -> 数组； n -> 返回几个
 * */
var MinN = function (arr, n) {
    if (n === void 0) { n = 1; }
    return __spreadArray([], arr).sort(function (a, b) { return a - b; }).slice(0, n);
};
exports.default = MinN;
