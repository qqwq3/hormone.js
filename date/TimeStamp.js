"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
/**
 * name: 时间戳
 * example: timeStamp('2021-07-16', false); // 1626427461763 -> 时间戳以毫秒的形式
 *          timeStamp('2021-07-16'); // 1626427453 -> 时间戳以秒的形式
 *          timeStamp(null); // 1626926075
 *          timeStamp(null, false); // 1626926088060
 *          timeStamp(new Date(), false); // 1626926182676
 *          timeStamp(new Date()); // 1626926231
 * args: convert -> 是否以秒的形式, date -> 时间：2021-07-16
 * */
var TimeStamp = function (date, convert) {
    if (convert === void 0) { convert = true; }
    var timeStampCurrent = CheckEmpty_1.default(date) ? new Date().getTime() : new Date(date).getTime();
    var newTimeStamp = '';
    convert ? (newTimeStamp = Math.round(timeStampCurrent / 1000)) : (newTimeStamp = timeStampCurrent);
    return newTimeStamp;
};
exports.default = TimeStamp;
