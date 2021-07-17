"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 数组去重
 * example: uniq([1, 1, 2, 3]); // [1, 2, 3]
 * args: array -> 数组
 * */
var Uniq = function (array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        var v = array[i];
        if (arr.indexOf(v) === -1) {
            arr.push(v);
        }
    }
    return arr;
};
exports.default = Uniq;
