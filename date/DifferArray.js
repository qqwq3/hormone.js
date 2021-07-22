"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DifferDays_1 = __importDefault(require("./DifferDays"));
var Addition_1 = __importDefault(require("./Addition"));
var Compare_1 = __importDefault(require("./Compare"));
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
var IsString_1 = __importDefault(require("../type/IsString"));
/**
 * name: 获取两个日期之间时间
 * describe: 结果已数组形式返回
 * example: differArray('2021-07-16', '2021-07-18'); // ['2021-07-16', '2021-07-17', '2021-07-18']
 * args: d1, d2
 * */
var DifferArray = function (d1, d2) {
    if (!CheckEmpty_1.default(d1) && IsString_1.default(d1) && !CheckEmpty_1.default(d2) && IsString_1.default(d2)) {
        var days = DifferDays_1.default(d1, d2);
        var array = [];
        for (var i = 0; i <= days; i++) {
            var date = Compare_1.default(d1, d2) ? new Date(d2) : new Date(d1);
            var item = Addition_1.default(date, 'D', i);
            array.push(item);
        }
        return array;
    }
    return [];
};
exports.default = DifferArray;
