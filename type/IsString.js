"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TypeCheck_1 = __importDefault(require("./TypeCheck"));
/**
 * name: 是否为字符串
 * example: isString('a'); // true
 * args: val -> 值
 * */
var IsString = function (val) { return TypeCheck_1.default(val) === 'String'; };
exports.default = IsString;
