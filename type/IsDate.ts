/**
 * name: 是否为 date
 * example: isDate(new Date()) // true
 * args: val -> 值
 * */
import TypeCheck from "./TypeCheck";
const IsDate = val => TypeCheck(val) === 'Date';
export default IsDate;
