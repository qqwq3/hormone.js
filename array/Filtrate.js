"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 数组过滤
 * example: filtrate([1, 0, false, '', 'e' * 23, NaN, null, undefined]); // [1]
 * args: array -> 数组
 * */
var Filtrate = function (array) { return array.filter(Boolean); };
exports.default = Filtrate;
