"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 数组去重
 * example: uniq([1, 1, 2, 3]); // [1, 2, 3]
 * args: array -> 数组
 * */
// @ts-ignore
var Uniq = function (array) { return __spreadArray([], new Set(array)); };
exports.default = Uniq;
