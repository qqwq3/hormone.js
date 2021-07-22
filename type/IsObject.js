"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TypeCheck_1 = __importDefault(require("./TypeCheck"));
/**
 * name: 是否为字对象
 * example: isObject({}); // true
 *          isObject([]); // false
 * args: val -> 值
 * */
var IsObject = function (val) { return TypeCheck_1.default(val) === 'Object'; };
exports.default = IsObject;
