"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Camelize_1 = __importDefault(require("./Camelize"));
/**
 * name: 类似于 camelize（string）,但也确保第一个字符是大写的
 * example: pascalize('hello_world-foo bar'); // 'HelloWorldFooBar'
 * args: str
 * */
var Pascalize = function (str) {
    var camelized = Camelize_1.default(str);
    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
};
exports.default = Pascalize;
