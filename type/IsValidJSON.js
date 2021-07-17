"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 是否为有效的JSON
 * example: isValidJSON('{"name":"Adam","age":20}'); // true
 *          isValidJSON('{"name":"Adam",age:"20"}'); // false
 * args: obj -> 值
 * */
var IsNull_1 = __importDefault(require("./IsNull"));
var IsUndefined_1 = __importDefault(require("./IsUndefined"));
var IsString_1 = __importDefault(require("./IsString"));
var IsValidJSON = function (obj) {
    if (IsNull_1.default(obj) || IsUndefined_1.default(obj) || !IsString_1.default(obj)) {
        return false;
    }
    try {
        JSON.parse(obj);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.default = IsValidJSON;
