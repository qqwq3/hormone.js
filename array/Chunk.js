"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 数组分块
 * example: chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
 * args: array -> 数组；size -> 分块尺寸
 * */
var Chunk = function (array, size) {
    if (size === void 0) { size = 1; }
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        arr.push(array.slice(i, i + size));
    }
    return arr;
};
exports.default = Chunk;
