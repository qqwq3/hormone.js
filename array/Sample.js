"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 数组取样，随机获取数组中的一个元素
 * example: sample([3, 7, 9, 11]); // 9
 * args: arr -> 数组
 * */
var Sample = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
exports.default = Sample;
