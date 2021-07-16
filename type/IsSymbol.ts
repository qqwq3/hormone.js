/**
 * name: 是否为symbol
 * example: isSymbol(Symbol('x')); // true
 * args: val -> 值
 * */
import TypeCheck from "./TypeCheck";
const IsSymbol = val => typeof val === 'symbol' && TypeCheck(val) === 'Symbol';
export default IsSymbol;
