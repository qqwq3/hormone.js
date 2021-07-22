"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
var IsBoolean_1 = __importDefault(require("../type/IsBoolean"));
/**
 * name: 数组杂质清理
 * example: impurityClean([1, false, null, undefined, '', {}, [], 2]); // [1, 2]
 * args: array -> 数组
 * */
var ImpurityClean = function (array) {
    var temp = [];
    for (var i = 0; i < array.length; i++) {
        var v = array[i];
        if (!CheckEmpty_1.default(v) && !IsBoolean_1.default(v) && !NaN) {
            temp.push(v);
        }
    }
    return temp;
};
exports.default = ImpurityClean;
