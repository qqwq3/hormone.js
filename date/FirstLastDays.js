"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IsDate_1 = __importDefault(require("../type/IsDate"));
var IsString_1 = __importDefault(require("../type/IsString"));
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
var Format_1 = __importDefault(require("./Format"));
var GetStartEnd = function (date) {
    var now = CheckEmpty_1.default(date) ? new Date() : new Date(date);
    var nowMonth = now.getMonth();
    var nowYear = now.getFullYear();
    var monthStartDate = new Date(nowYear, nowMonth, 1);
    var monthEndDate = new Date(nowYear, nowMonth + 1, 0);
    return [Format_1.default(monthStartDate), Format_1.default(monthEndDate)];
};
/**
 * name: 获取月份的第一天与最后一天
 * describe: 返回数组
 * example: firstLastDays(); // [2021-07-01, 2021-07-31]
 *          firstLastDays(new Date()); // [2021-07-01, 2021-07-31]
 *          firstLastDays('2021-05-20'); // [2021-05-01, 2021-05-31]
 *          firstLastDays('2021-05'); // [2021-05-01, 2021-05-31]
 *          firstLastDays('2021'); // [2021-01-01, 2021-01-31]
 * args: date
 * */
var FirstLastDays = function (date) {
    if (CheckEmpty_1.default(date)) {
        return GetStartEnd('');
    }
    if (IsDate_1.default(date) || IsString_1.default(date)) {
        return GetStartEnd(Format_1.default(date));
    }
    return [];
};
exports.default = FirstLastDays;
