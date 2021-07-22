"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
/**
 * name: 获取星期几
 * example: getWeek(); // 星期二
 *          getWeek(null, ''); // 星期二
 *          getWeek(null, '周'); // 周二
 *          getWeek(new Date(), '星期'); // 星期二
 *          getWeek(new Date(), '周'); // 周二
 *          getWeek(new Date(), '礼拜'); // 礼拜二
 *          getWeek('2020-05-20'); // 星期三
 * args: date = <>, str = <'星期', '周', '礼拜'>
 * */
var GetWeek = function (date, str) {
    if (str === void 0) { str = '星期'; }
    var now = !date ? new Date() : new Date(date);
    var days = now.getDay();
    var text = '';
    switch (days) {
        case 1:
            text = (CheckEmpty_1.default(str) ? '星期' : str) + "\u4E00";
            break;
        case 2:
            text = (CheckEmpty_1.default(str) ? '星期' : str) + "\u4E8C";
            break;
        case 3:
            text = (CheckEmpty_1.default(str) ? '星期' : str) + "\u4E09";
            break;
        case 4:
            text = (CheckEmpty_1.default(str) ? '星期' : str) + "\u56DB";
            break;
        case 5:
            text = (CheckEmpty_1.default(str) ? '星期' : str) + "\u4E94";
            break;
        case 6:
            text = (CheckEmpty_1.default(str) ? '星期' : str) + "\u516D";
            break;
        case 0:
            text = (CheckEmpty_1.default(str) ? '星期' : str) + "\u65E5";
            break;
    }
    return text;
};
exports.default = GetWeek;
