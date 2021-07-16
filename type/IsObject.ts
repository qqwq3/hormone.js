/**
 * name: 是否为字对象
 * example: isObject({}); // true
 *          isObject([]); // false
 * args: val -> 值
 * */
import TypeCheck from "./TypeCheck";
const IsObject = val => TypeCheck(val) === 'Object';
export default IsObject;
