"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 明天
 * example: tomorrow(); // '2021-07-17'
 *          tomorrow('2020-05-20'); '2020-05-21'
 * args: value -> 日期：2020-05-20
 * */
var Tomorrow = function (value) { return new Date((value ? new Date(value).getTime() : new Date().getTime()) + 86400000).toISOString().split('T')[0]; };
exports.default = Tomorrow;
