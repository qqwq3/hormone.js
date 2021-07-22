"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GetRandomColor_1 = __importDefault(require("./GetRandomColor"));
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
/**
 * name: 生成指定范围内的颜色
 * describe: 以数组的形式返回
 * example: getRangeColors(); // [{key: 0, color: '#c4192e'}, {key: 1, color: '#370665'}]
 *          getRangeColors(null); // [{key: 0, color: '#c4192e'}, {key: 1, color: '#370665'}]
 *          getRangeColors(0); // [{key: 0, color: '#c4192e'}]
 *          getRangeColors(-1); // [{key: 0, color: '#c4192e'}]
 *          getRangeColors(100); // [{key: 0, color: '#c4192e'}, ..., {key: 99, color: '#10f168'}]
 * args: values
 * */
var GetRangeColors = function (values) {
    if (CheckEmpty_1.default(values)) {
        return [{ key: 0, color: GetRandomColor_1.default() }, { key: 1, color: GetRandomColor_1.default() }];
    }
    if (values < 1) {
        return [{ key: 0, color: GetRandomColor_1.default() }];
    }
    var array = [];
    for (var i = 0; i < values; i++) {
        array.push({ key: i, color: GetRandomColor_1.default() });
    }
    return array;
};
exports.default = GetRangeColors;
