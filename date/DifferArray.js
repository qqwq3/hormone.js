"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DifferDays_1 = __importDefault(require("./DifferDays"));
var Addition_1 = __importDefault(require("./Addition"));
var Compare_1 = __importDefault(require("./Compare"));
var FirstLastDays_1 = __importDefault(require("./FirstLastDays"));
var setArray = function (d1, d2) {
    var days = DifferDays_1.default(d1, d2);
    var array = [];
    for (var i = 0; i <= days; i++) {
        var date = Compare_1.default(d1, d2) ? new Date(d2) : new Date(d1);
        var item = Addition_1.default(date, 'D', i);
        array.push(item);
    }
    return array;
};
/**
 * name: 获取两个日期之间时间
 * describe: 结果已数组形式返回
 * example: differArray('2021-07-16', '2021-07-18'); // ['2021-07-16', '2021-07-17', '2021-07-18']
 *          differArray(new Date(), '2021-07-10'); // ['2021-07-10', ..., '2021-07-16']
 *          differArray(new Date(), new Date()); // ['2021-07-16']
 *          differArray(new Date()); // ['2021-07-16', ..., '2021-07-31']
 *          differArray(new Date(), null); // ['2021-07-16', ..., '2021-07-31']
 *          differArray(null, new Date()); // ['2021-07-01', ..., '2021-07-16']
 *          differArray(); // ['2021-07-01', ..., '2021-07-31']
 *          differArray('2020-05-20', new Date('2020-05-25')); // ['2020-05-20', ..., '2020-05-25']
 * args: d1, d2
 * */
var DifferArray = function (d1, d2) {
    try {
        if (d1 && d2) {
            return setArray(d1, d2);
        }
        if (d1 && !d2) {
            var fl_1 = FirstLastDays_1.default(d1);
            var e = fl_1[1];
            return setArray(d1, e);
        }
        if (!d1 && d2) {
            var fl_2 = FirstLastDays_1.default(d2);
            var s = fl_2[0];
            return setArray(d2, s);
        }
        var fl = FirstLastDays_1.default('');
        return setArray(fl[0], fl[1]);
    }
    catch (e) {
        return console.error('error: ' + e.message);
    }
};
exports.default = DifferArray;
