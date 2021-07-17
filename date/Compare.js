"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 日期对比
 * example: compare('2021-07-16', '2021-07-10'); // true
 * args: newData -> 当天时间, oldDate -> 历史时间
 * */
var Compare = function (newDate, oldDate) { return (new Date(newDate.replace(/-/g, '\/'))) > (new Date(oldDate.replace(/-/g, '\/'))); };
exports.default = Compare;
