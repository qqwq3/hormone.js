"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 计数数组中某个值的出现次数
 * example: countOccurrences(['a', 'a', 'b', 'c'], 'a'); // 2
 * args: array -> 数组; value -> 数组中的元素
 * */
var CountOccurrences = function (array, value) { return array.reduce(function (a, v) { return (v === value ? a + 1 : a + 0); }, 0); };
exports.default = CountOccurrences;
