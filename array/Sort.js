"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 数组排序(采用冒泡法实现数组排序)
 * example: sort([2, 1, 3]); // [1, 2, 3]
 * args: arr -> 数组
 * */
var Sort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    for (var i = 0, len = arr.length; i < len - 1; i++) {
        for (var j = i; j < len; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
exports.default = Sort;
