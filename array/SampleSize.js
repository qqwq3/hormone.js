"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 从数组中随机获取 n 个元素
 * example: sampleSize([1, 2, 3], 2); // [3, 1]
 *          sampleSize([1, 2, 3], 4); // [2, 3, 1]
 * args: arr -> 数组
 * */
var SampleSize = function (arr, n) {
    var _a;
    if (n === void 0) { n = 1; }
    var m = arr.length;
    while (m) {
        var i = Math.floor(Math.random() * m--);
        _a = [arr[i], arr[m]], arr[m] = _a[0], arr[i] = _a[1];
    }
    return arr.slice(0, n);
};
exports.default = SampleSize;
