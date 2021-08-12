"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
var IsString_1 = __importDefault(require("../type/IsString"));
var IsNumber_1 = __importDefault(require("../type/IsNumber"));
/**
 * name: 中文大写货币
 * example: chineseCurrency(1) or chineseCurrency('1'); // '壹元整'
 *          chineseCurrency('100.25'); // '壹佰元贰角伍分'
 *          chineseCurrency('100000000'); // '壹亿元整'
 * args: value
 * */
var ChineseCurrency = function (value) {
    if (!value || CheckEmpty_1.default(value) || IsNumber_1.default(value) && value <= 0) {
        return null;
    }
    var num = value;
    var strOutput = '', strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
    if (typeof value === "string" && IsString_1.default(value)) {
        num = parseFloat(value);
    }
    num += '00';
    var intPos = num.indexOf('.');
    if (intPos >= 0) {
        num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
    }
    strUnit = strUnit.substr(strUnit.length - num.length);
    for (var i = 0; i < num.length; i++) {
        strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
    }
    return strOutput
        .replace(/零角零分$/, '整')
        .replace(/零[仟佰拾]/g, '零')
        .replace(/零{2,}/g, '零')
        .replace(/零([亿|万])/g, '$1')
        .replace(/零+元/, '元')
        .replace(/亿零{0,3}万/, '亿')
        .replace(/^元/, "零元");
};
exports.default = ChineseCurrency;
