"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IsObject_1 = __importDefault(require("../type/IsObject"));
var IsArray_1 = __importDefault(require("../type/IsArray"));
var Camelize_1 = __importDefault(require("../string/Camelize"));
/**
 * name: 对象键统一小驼峰化
 * example: camelizeKeys({Name: 'hormone', 'a-b': true, attr_one: 'foo'}); // {name: 'hormone', aB: true, attrOne: 'foo'}
 *          camelizeKeys([{attr_one: 'foo'}, {attr_one: 'bar'}]); // [{ attrOne: 'foo' }, { attrOne: 'bar' }]
 * args: obj
 * */
var CamelizeKeys = function (obj) {
    if (IsObject_1.default(obj)) {
        var output = {};
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                output[Camelize_1.default(key)] = CamelizeKeys(obj[key]);
            }
        }
        return output;
    }
    if (IsArray_1.default(obj)) {
        var output = [];
        for (var i = 0; i < obj.length; i++) {
            output.push(CamelizeKeys(obj[i]));
        }
        return output;
    }
    return obj;
};
exports.default = CamelizeKeys;
