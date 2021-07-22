"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 随机获取颜色
 * example: getRandomColor(); // '#049543'
 * */
var GetRandomColor = function () { return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6); };
exports.default = GetRandomColor;
