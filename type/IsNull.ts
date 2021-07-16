/**
 * name: 是否为 null
 * example: isNull(null); // true
 * args: val -> 值
 * */
import TypeCheck from "./TypeCheck";
const IsNull = val => TypeCheck(val) === 'Null';
export default IsNull;
