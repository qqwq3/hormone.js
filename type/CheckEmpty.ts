/**
 * name: 检查空
 * example: checkEmpty('' | [] | null | {} | undefined); // true
 * args: value
 * */
import TypeCheck from "./TypeCheck";
const CheckEmpty = value => {
  let status = false;
  if (TypeCheck(value) === 'Object' && (value === null || Object.keys(value).length === 0)) {status = true}
  else if (TypeCheck(value) === 'String' && /^(\s)*$/.test(value)) {status = true}
  else if (TypeCheck(value) === 'Undefined') {status = true}
  else if (TypeCheck(value) === 'Null') {status = true}
  else if (TypeCheck(value) === 'Array' && value.length === 0) {status = true}
  return status
};
export default CheckEmpty;
