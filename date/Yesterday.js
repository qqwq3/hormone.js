"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 昨天
 * example: yesterday(); // '2021-07-16'
 *          yesterday('2020-05-20'); // '2020-05-19'
 * args: value -> 日期：2020-05-20
 * */
var Yesterday = function (value) { return new Date((value ? new Date(value).getTime() : new Date().getTime()) - 86400000).toISOString().split('T')[0]; };
exports.default = Yesterday;
