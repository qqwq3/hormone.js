"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IsDate_1 = __importDefault(require("../type/IsDate"));
var IsString_1 = __importDefault(require("../type/IsString"));
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
/**
 * name: 日期格式化
 * example: format('2021/7/16', 'YYYY-MM-DD'); // 2021-07-16
 *          format('2021/7/16', 'YYYY'); // 2021
 *          format('2021/7/16', 'YYYY-MM'); // 2021-07
 *          format('2021/7/16', 'M'); // 7
 *          format('2021/7/16', 'D'); // 16
 *          format(new Date(), 'YYYY-MM-DD hh:mm:ss') // 2021-07-16 12:30:30
 *          format(null, 'YYYY'); // 2021 -> 最新年份
 *          format(null, 'YYYY-MM'); // 2021-07 -> 最新月份
 *
 *          const s = Format('2021/7/16');
 *          console.log(new Date(s).getMonth() + 1); // 7
 * args: date, type
 * */
var Format = function (date, type) {
    if (type === void 0) { type = 'YYYY-MM-DD'; }
    // @ts-ignore
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "D+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds() // 毫秒 - seconds
        };
        if (/(Y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }
        return fmt;
    };
    if (IsDate_1.default(date) || IsString_1.default(date)) {
        // @ts-ignore
        return new Date(date).format(type);
    }
    if (CheckEmpty_1.default(date)) {
        // @ts-ignore
        return new Date().format(type);
    }
    return date;
};
exports.default = Format;
