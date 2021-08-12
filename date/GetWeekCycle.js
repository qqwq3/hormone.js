"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
var GetDateWeeks_1 = __importDefault(require("./GetDateWeeks"));
var ToChinesNum_1 = __importDefault(require("../operation/ToChinesNum"));
var Flatten_1 = __importDefault(require("../array/Flatten"));
var GetWeekCycle = function (props) {
    var array = (!props || CheckEmpty_1.default(props)) ? GetDateWeeks_1.default() : GetDateWeeks_1.default(__assign({}, props));
    var a = [];
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item.week.includes('日')) {
            a.push(array.slice(j, i + 1));
            j = i + 1;
        }
    }
    var f = array.filter(function (item) { return !Flatten_1.default(a).map(function (x) { return x.date; }).includes(item.date); });
    f.length > 0 && a.push(f);
    var m = [];
    for (var i = 0; i < a.length; i++) {
        var ar = a[i];
        m.push({
            key: i + 1,
            text: "\u7B2C" + ToChinesNum_1.default({ num: i + 1 }) + "\u5468",
            start: ar[0].date,
            end: ar[ar.length - 1].date,
            data: ar
        });
    }
    return m;
};
exports.default = GetWeekCycle;
