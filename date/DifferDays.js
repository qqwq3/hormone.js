"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Format_1 = __importDefault(require("./Format"));
/**
 * name: 获取两个日期之间相差的天数
 * example: differDays('2021-07-16', '2021-07-06'); // 10
 * args: dateInitial, dateFinal
 * */
// @ts-ignore
var DifferDays = function (dateInitial, dateFinal) { return Math.abs((new Date(Format_1.default(dateFinal)) - new Date(Format_1.default(dateInitial))) / (1000 * 3600 * 24)); };
exports.default = DifferDays;
