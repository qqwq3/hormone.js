"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Format_1 = __importDefault(require("./Format"));
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
var DifferArray_1 = __importDefault(require("./DifferArray"));
var FirstLastDays_1 = __importDefault(require("./FirstLastDays"));
var GetWeek_1 = __importDefault(require("./GetWeek"));
var ReArray = function (s, e, str) {
    var a = DifferArray_1.default(s, e);
    var array = [];
    a.forEach(function (d) { return array.push({ date: d, week: GetWeek_1.default(d, str) }); });
    return array;
};
var GetDateWeeks = function (objs) {
    if (CheckEmpty_1.default(objs)) {
        var fl = FirstLastDays_1.default();
        var s = fl[0], e = fl[1];
        return ReArray(s, e, '星期');
    }
    else {
        var start = objs.start, end = objs.end, date = objs.date, _a = objs.type, type = _a === void 0 ? '星期' : _a;
        type = CheckEmpty_1.default(type) ? '星期' : type;
        // 不传月份的情况
        if (start && end && !date) {
            var s = Format_1.default(start), e = Format_1.default(end);
            return ReArray(s, e, type);
        }
        // 只传月份的情况
        if (!start && !end && date) {
            var fl = FirstLastDays_1.default(date);
            var s = fl[0], e = fl[1];
            return ReArray(s, e, type);
        }
        // 都传的情况
        if (start && end && date) {
            var sn = new Date(start), en = new Date(end), dd = new Date(date);
            if (sn.getMonth() + 1 === dd.getMonth() + 1 && en.getMonth() + 1 === dd.getMonth() + 1) {
                var s = Format_1.default(start), e = Format_1.default(end);
                return ReArray(s, e, type);
            }
            return [];
        }
        // 都不传的情况
        if (!start && !end && !date) {
            var fl = FirstLastDays_1.default();
            var s = fl[0], e = fl[1];
            return ReArray(s, e, type);
        }
        // 不传开始日期的情况
        if (!start && end && date) {
            var en = new Date(end), dd = new Date(date);
            if (en.getMonth() + 1 === dd.getMonth() + 1) {
                var fl = FirstLastDays_1.default(date);
                var s = fl[0], e = end;
                return ReArray(s, e, type);
            }
            return [];
        }
        // 不传结束日期的情况
        if (start && !end && date) {
            var sn = new Date(start), dd = new Date(date);
            if (sn.getMonth() + 1 === dd.getMonth() + 1) {
                var fl = FirstLastDays_1.default(date);
                var s = start, e = fl[1];
                return ReArray(s, e, type);
            }
            return [];
        }
        // 只传开始日期的情况
        if (start && !end && !date) {
            var fl = FirstLastDays_1.default(start);
            var s = start, e = fl[1];
            return ReArray(s, e, type);
        }
        // 只传结束日期的情况
        if (!start && end && !date) {
            var fl = FirstLastDays_1.default(end);
            var s = fl[0], e = end;
            return ReArray(s, e, type);
        }
    }
    return [];
};
exports.default = GetDateWeeks;
