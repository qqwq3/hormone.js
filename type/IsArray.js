"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TypeCheck_1 = __importDefault(require("./TypeCheck"));
/**
 * name: 是否为数组
 * example: isArray([1]); // true
 * args: val -> 值
 * */
var IsArray = function (val) { return Array.isArray(val) && TypeCheck_1.default(val) === 'Array'; };
exports.default = IsArray;
