/**
 * name: 是否为 number
 * example: isNumber(1); // true
 * args: val -> 值
 * */
import TypeCheck from "./TypeCheck";
const IsNumber = val => TypeCheck(val) === 'Number';
export default IsNumber;
