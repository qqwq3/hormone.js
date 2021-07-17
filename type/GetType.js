"use strict";
/**
 * name: 获取原生类型的值
 * example: getType(new Set([1, 2, 3])); // 'set'
 * args: v -> 值
 * */
Object.defineProperty(exports, "__esModule", { value: true });
var GetType = function (v) { return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase(); };
exports.default = GetType;
