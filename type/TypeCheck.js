"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 类型检查
 * example: typeCheck('1'); // String
 * args: val -> 值
 * */
var TypeCheck = function (val) {
    var typeArr = ['String', 'Object', 'Number', 'Array', 'Function', 'Null', 'Undefined', 'Symbol', 'Boolean', 'Date'];
    var o = Object.prototype.toString.call(val);
    var v = (o.split('object')[1]).split(']')[0];
    var m = v.replace(/\s/g, '');
    if (typeArr.indexOf(m) >= 0) {
        return m;
    }
    else {
        console.error('type check：', m + " This type is not in the JavaScript type");
    }
};
exports.default = TypeCheck;
