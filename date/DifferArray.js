"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 获取两个日期之间时间
 * describe: 结果已数组形式返回
 * example: differArray('2021-07-16', '2021-07-18'); // ['2021-07-16', '2021-07-17', '2021-07-18']
 * args: d1, d2, t
 * */
var DifferDays_1 = __importDefault(require("./DifferDays"));
var Addition_1 = __importDefault(require("./Addition"));
var Compare_1 = __importDefault(require("./Compare"));
var DifferArray = function (d1, d2, t) {
    if (t === void 0) { t = 'D'; }
    var days = DifferDays_1.default(d1, d2);
    var array = [];
    for (var i = 0; i <= days; i++) {
        var date = Compare_1.default(d1, d2) ? new Date(d2) : new Date(d1);
        var item = Addition_1.default(date, t, i);
        array.push(item);
    }
    return array;
};
exports.default = DifferArray;
