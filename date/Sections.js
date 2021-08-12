"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Format_1 = __importDefault(require("./Format"));
var Sections = function (_a) {
    var _b = _a.num, num = _b === void 0 ? 24 : _b, _c = _a.form, form = _c === void 0 ? 'hh:mm' : _c, _d = _a.hours, hours = _d === void 0 ? 0 : _d, _e = _a.min, min = _e === void 0 ? 0 : _e, _f = _a.sec, sec = _f === void 0 ? 0 : _f;
    var array = [];
    var totalTime = 24 * 3600 * 1000;
    var time = totalTime / num;
    var D = new Date();
    D.setHours(hours, min, sec, 0);
    var currentTime = D.getTime();
    for (var i = 0; i < num; i++) {
        currentTime += time;
        array.push(Format_1.default(new Date(currentTime), form));
    }
    return array;
};
exports.default = Sections;
