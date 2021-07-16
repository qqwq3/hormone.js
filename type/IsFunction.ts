/**
 * name: 是否为 function
 * example: isFunction(function() {}); // true
 * args: val -> 值
 * */
import TypeCheck from "./TypeCheck";
const IsFunction = val => TypeCheck(val) === 'Function';
export default IsFunction;
