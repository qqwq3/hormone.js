"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 今天
 * example: toDay(); // '2021-07-17'
 *          toDay('2020-05-20'); '2020-05-20'
 * args: value -> 日期：2020-05-20
 * */
var ToDay = function (value) { return new Date((value ? new Date(value).getTime() : new Date().getTime())).toISOString().split('T')[0]; };
exports.default = ToDay;
