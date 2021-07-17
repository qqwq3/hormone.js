"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 深度平铺数组
 * example: flatten([1, [2, [3, [4]]]]); // [1, 2, 3, 4];
 * args: array -> 数组
 * */
var Flatten = function (array) { return [].concat.apply([], array.map(function (value) { return (Array.isArray(value) ? Flatten(value) : value); })); };
exports.default = Flatten;
