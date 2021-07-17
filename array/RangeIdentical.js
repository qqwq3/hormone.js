"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 初始化特定范围和值的数组
 * example: rangeIdentical(5, 2); // [2, 2, 2, 2, 2]
 * args: n, val
 * */
var RangeIdentical = function (n, val) {
    if (val === void 0) { val = 0; }
    return Array(n).fill(val);
};
exports.default = RangeIdentical;
