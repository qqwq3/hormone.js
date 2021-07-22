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
declare const TypeCheck: (val: any) => string | any;
export default TypeCheck;
