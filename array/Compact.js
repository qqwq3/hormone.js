"use strict";
/**
 * name: 数组过滤
 * example: compact([1, 0, false, '', 'e' * 23, NaN, null, undefined]); // [1]
 * args: array -> 数组
 * */
Object.defineProperty(exports, "__esModule", { value: true });
var Compact = function (array) { return array.filter(Boolean); };
exports.default = Compact;
