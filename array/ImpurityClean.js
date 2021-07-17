"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 数组杂质清理
 * example: impurityClean([1, false, null, undefined, '', {}, [], 2]); // [1, 2]
 * args: array -> 数组
 * */
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
var IsArray_1 = __importDefault(require("../type/IsArray"));
var IsBoolean_1 = __importDefault(require("../type/IsBoolean"));
var ImpurityClean = function (array) {
    var temp = [];
    if (IsArray_1.default(array)) {
        return console.warn('请传入数组类型的参数');
    }
    if (array && array.length === 0) {
        return array || [];
    }
    for (var i = 0; i < array.length; i++) {
        var v = array[i];
        if (!CheckEmpty_1.default(v) && !IsBoolean_1.default(v) && !NaN) {
            temp.push(v);
        }
    }
    return temp;
};
exports.default = ImpurityClean;
