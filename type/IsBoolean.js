"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TypeCheck_1 = __importDefault(require("./TypeCheck"));
/**
 * name: 是否为布尔
 * example: isBoolean(null); // false
 *          isBoolean(false); // true
 * args: val -> 值
 * */
var IsBoolean = function (val) { return typeof val === 'boolean' && TypeCheck_1.default(val) === 'Boolean'; };
exports.default = IsBoolean;
