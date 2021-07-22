"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IsNumber_1 = __importDefault(require("../type/IsNumber"));
var IsDate_1 = __importDefault(require("../type/IsDate"));
var Format_1 = __importDefault(require("./Format"));
/**
 * name: 日期相加
 * example: addition('2021-07-16', 'Y', 1); // 2022-07-16
 *          addition('2021-07-16', 'Q', 1); // 2021-10-16
 *          addition('2021-07-16', 'M', 1); // 2021-08-16
 *          addition('2021-07-16', 'W', 1); // 2021-07-29
 *          addition('2021-07-16', 'D', 1); // 2021-07-17
 *          addition('2021-07-16 10:30:00', 'h', 2); // 2021-07-16 12:30:00
 *          addition('2021-07-16 10:30:00', 'm', 2); // 2021-07-16 10:32:00
 *          addition('2021-07-16 10:30:00', 's', 2); // 2021-07-16 10:30:02
 * args: date -> 日期，interval -> 类型， number -> 差数
 * */
var Addition = function (date, interval, number) {
    var d = new Date();
    var n = IsNumber_1.default(number) ? number : Number(number);
    if (IsDate_1.default(date)) {
        d = date;
    }
    else {
        d = new Date(date);
    }
    switch (interval) {
        // year
        case 'Y':
            d.setFullYear(d.getFullYear() + n);
            return Format_1.default(d);
            break;
        // quarter
        case 'Q':
            d.setMonth(d.getMonth() + n * 3);
            return Format_1.default(d);
            break;
        // month
        case 'M':
            d.setMonth(d.getMonth() + n);
            return Format_1.default(d);
            break;
        // week
        case 'W':
            d.setDate(d.getDate() + n * 7);
            return Format_1.default(d);
            break;
        // day
        case 'D':
            d.setDate(d.getDate() + n);
            return Format_1.default(d);
            break;
        // hours
        case 'h':
            d.setHours(d.getHours() + n);
            return Format_1.default(d, 'YYYY-MM-DD hh:mm:ss');
            break;
        // minutes
        case 'm':
            d.setMinutes(d.getMinutes() + n);
            return Format_1.default(d, 'YYYY-MM-DD hh:mm:ss');
            break;
        // seconds
        case 's':
            d.setSeconds(d.getSeconds() + n);
            return Format_1.default(d, 'YYYY-MM-DD hh:mm:ss');
            break;
    }
};
exports.default = Addition;
