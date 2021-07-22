"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IsFunction_1 = __importDefault(require("../type/IsFunction"));
/**
 * name: 计数数组中某个值的出现次数
 * example: countOccurrences(['a', 'a', 'b', 'c'], 'a'); // 2
 *          countOccurrences(['a', 'a', 'b', 'c'], r => r === 'a'); // 2
 *          countOccurrences([{name: 'a'}, {name: 'a'}, {name: 'b'}, {name: 'c'}], r => r.name === 'a'); // 2
 *          countOccurrences([[1, 2], [1, 3], [1, 3, 4], [5, 6]], r => r.includes(1)); // 3
 * args: array -> 数组; value -> 数组中的元素或者方法
 * */
var CountOccurrences = function (array, value) {
    return array.reduce(function (a, v) {
        if (IsFunction_1.default(value)) {
            return value(v) ? a + 1 : a + 0;
        }
        return v === value ? a + 1 : a + 0;
    }, 0);
};
exports.default = CountOccurrences;
