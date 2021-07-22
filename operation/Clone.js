"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IsString_1 = __importDefault(require("../type/IsString"));
var IsBoolean_1 = __importDefault(require("../type/IsBoolean"));
var IsDate_1 = __importDefault(require("../type/IsDate"));
var IsNumber_1 = __importDefault(require("../type/IsNumber"));
var IsSymbol_1 = __importDefault(require("../type/IsSymbol"));
var IsFunction_1 = __importDefault(require("../type/IsFunction"));
var IsArray_1 = __importDefault(require("../type/IsArray"));
var IsObject_1 = __importDefault(require("../type/IsObject"));
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
/**
 * name: 深拷贝
 * example: const a = [1, 2, 3];
 *          const b = clone(a);
 *          a[0] = 6;
 *          console.log('a', a); // [6, 2, 3]
 *          console.log('b', b); // [1, 2, 3]
 * args: source
 * */
var Clone = function (source) {
    if (source === void 0) { source = null; }
    if (CheckEmpty_1.default(source)) {
        return source;
    }
    if (IsString_1.default(source)) {
        return source.slice();
    }
    if (IsNumber_1.default(source) || IsBoolean_1.default(source) || IsDate_1.default(source) || IsSymbol_1.default(source) || IsFunction_1.default(source)) {
        var n = source;
        return n;
    }
    if (IsArray_1.default(source) || IsObject_1.default(source)) {
        var target = IsArray_1.default(source) ? [] : {};
        for (var keys in source) {
            if (source.hasOwnProperty(keys)) {
                if (source[keys] && typeof source[keys] === 'object') {
                    target[keys] = IsArray_1.default(source) ? [] : {};
                    target[keys] = Clone(source[keys]);
                }
                else {
                    target[keys] = source[keys];
                }
            }
        }
        return target;
    }
    return source;
};
exports.default = Clone;
