"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 获取数组合集
 * example: union([1, 2, 3], [1, 4, 5]]); // [1, 2, 3, 4, 5]
 * args: a -> 数组； b -> 数组
 * */
var Union = function (a, b) { return Array.from(new Set(__spreadArray(__spreadArray([], a), b))); };
exports.default = Union;
