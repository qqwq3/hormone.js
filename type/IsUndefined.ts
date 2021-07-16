/**
 * name: 是否为 undefined
 * example: isUndefined(undefined) // true
 * args: val -> 值
 * */
import TypeCheck from "./TypeCheck";
const IsUndefined = val => TypeCheck(val) === 'Undefined';
export default IsUndefined;
