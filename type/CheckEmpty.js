"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TypeCheck_1 = __importDefault(require("./TypeCheck"));
/**
 * name: 检查空
 * example: checkEmpty('' | [] | null | {} | undefined | 0); // true
 * args: value
 * */
var CheckEmpty = function (value) {
    var status = false;
    if (TypeCheck_1.default(value) === 'Object' && (value === null || Object.keys(value).length === 0)) {
        status = true;
    }
    else if (TypeCheck_1.default(value) === 'String' && /^(\s)*$/.test(value)) {
        status = true;
    }
    else if (TypeCheck_1.default(value) === 'Undefined') {
        status = true;
    }
    else if (TypeCheck_1.default(value) === 'Null') {
        status = true;
    }
    else if (TypeCheck_1.default(value) === 'Array' && value.length === 0) {
        status = true;
    }
    else if (TypeCheck_1.default(value) === 'Number' && value === 0) {
        status = true;
    }
    return status;
};
exports.default = CheckEmpty;
