"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 获取原生类型的值
 * example: getType(new Set([1, 2, 3])); // 'set'
 *          getType(new Map()); // 'map'
 *          getType(Promise); // 'function'
 *          getType(new Promise((resolve, reject) => resolve())); // 'promise'
 *          getType([]); // 'array'
 *          getType(false); // 'boolean'
 *          getType(1); // 'number'
 *          getType(null); // null
 *          getType(''); // 'string'
 *          getType(); // 'undefined'
 *          getType(undefined); // 'undefined'
 *          getType(Symbol('x')); // 'symbol'
 * args: v -> 值
 * */
var GetType = function (v) { return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase(); };
exports.default = GetType;
