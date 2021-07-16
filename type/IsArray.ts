/**
 * name: 是否为数组
 * example: isArray([1]); // true
 * args: val -> 值
 * */
import TypeCheck from "./TypeCheck";
const IsArray = val => Array.isArray(val) && TypeCheck(val) === 'Array';
export default IsArray;
