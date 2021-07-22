"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 类型检查
 * example: typeCheck('1'); // String
 *          typeCheck({}); // Object
 *          typeCheck(2); // Number
 *          typeCheck([]); // Array
 *          typeCheck(function f() {}); // Function
 *          typeCheck(null); // Null
 *          typeCheck(true); // Boolean
 *          typeCheck(new Date()); // Date
 *          typeCheck(symbol('x')); // Symbol
 *          let a; typeCheck(a); // Undefined
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
