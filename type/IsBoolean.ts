/**
 * name: 是否为布尔
 * example: isBoolean(null); // false
 *          isBoolean(false); // true
 * args: val -> 值
 * */
import TypeCheck from "./TypeCheck";
const IsBoolean = val => typeof val === 'boolean' && TypeCheck(val) === 'Boolean';
export default IsBoolean;
