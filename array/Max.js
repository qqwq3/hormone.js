"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 获取数组最大值
 * example: max([1, 2, 3]); // [3]
 * args: arr -> 数组
 * */
var Max = function (arr) { return Math.max.apply(null, arr); };
exports.default = Max;
