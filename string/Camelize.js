"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IsNumber_1 = __importDefault(require("../type/IsNumber"));
/**
 * name: 字符串小驼峰转化
 * example: camelize('Hormone.js'); // 'hormone.js'
 *          camelize('hello_world'); // 'helloWorld'
 *          camelize('hello_world-foo bar'); // 'helloWorldFooBar'
 * args: string
 * */
var Camelize = function (string) {
    if (IsNumber_1.default(string)) {
        return string;
    }
    string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) { return chr ? chr.toUpperCase() : ''; });
    return string.substr(0, 1).toLowerCase() + string.substr(1);
};
exports.default = Camelize;
