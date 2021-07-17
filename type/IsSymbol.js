"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 是否为symbol
 * example: isSymbol(Symbol('x')); // true
 * args: val -> 值
 * */
var TypeCheck_1 = __importDefault(require("./TypeCheck"));
var IsSymbol = function (val) { return typeof val === 'symbol' && TypeCheck_1.default(val) === 'Symbol'; };
exports.default = IsSymbol;
