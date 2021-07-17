"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 时长转换
 * describe: 把秒数转换为 00:00 or 00:00:00 格式
 * example: secToTime(120); // '00:02:00'
 *          secToTime(120, false) // '02:00'
 * args: value -> 时长值，status
 * */
var SecToTime = function (value, status) {
    if (value === void 0) { value = 0; }
    if (status === void 0) { status = true; }
    var t = '';
    var hour = Math.floor(value / 3600);
    var min = Math.floor((value / 60) % 60);
    var sec = value % 60;
    if (status) {
        t = hour < 10 ? ('0' + hour + ':') : (hour + ':');
    }
    if (min < 10) {
        t += '0';
    }
    t += (min + ':');
    if (sec < 10) {
        t += '0';
    }
    t += sec.toFixed(0);
    return t;
};
exports.default = SecToTime;
