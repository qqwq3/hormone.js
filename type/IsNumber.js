"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 是否为 number
 * example: isNumber(1); // true
 * args: val -> 值
 * */
var TypeCheck_1 = __importDefault(require("./TypeCheck"));
var IsNumber = function (val) { return TypeCheck_1.default(val) === 'Number'; };
exports.default = IsNumber;
