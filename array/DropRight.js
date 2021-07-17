"use strict";
/**
 * name: 从右开始删除数组元素
 * describe: 返回从右开始删除 n个元素的新数组
 * example: dropRight([1, 2, 3, 4], 2); // [1, 2]
 * args: array -> 数组; n -> 删除元素个数
 * */
Object.defineProperty(exports, "__esModule", { value: true });
var DropRight = function (array, n) {
    if (n === void 0) { n = 1; }
    return array.slice(0, -n);
};
exports.default = DropRight;
