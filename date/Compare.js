"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Format_1 = __importDefault(require("./Format"));
/**
 * name: 日期对比
 * example: compare('2021-07-16', '2021-07-10'); // true
 *          compare(new Date(), '2021-07-10'); // true
 * args: newData -> 当天时间, oldDate -> 历史时间
 * */
var Compare = function (newDate, oldDate) {
    if (newDate && oldDate) {
        return (new Date(Format_1.default(newDate).replace(/-/g, '\/'))) > (new Date(Format_1.default(oldDate).replace(/-/g, '\/')));
    }
    return console.error('error：请输入对比日期');
};
exports.default = Compare;
