/**
 * name: 是否为字符串
 * example: isString('a'); // true
 * args: val -> 值
 * */
import TypeCheck from "./TypeCheck";
const IsString = val => TypeCheck(val) === 'String';
export default IsString;
