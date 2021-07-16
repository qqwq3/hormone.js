/**
 * name: 是否为有效的JSON
 * example: isValidJSON('{"name":"Adam","age":20}'); // true
 *          isValidJSON('{"name":"Adam",age:"20"}'); // false
 * args: obj -> 值
 * */
import IsNull from "./IsNull";
import IsUndefined from "./IsUndefined";
import IsString from "./IsString";

const IsValidJSON = obj => {
  if (IsNull(obj) || IsUndefined(obj) || !IsString(obj)) {
    return false;
  }
  try { JSON.parse(obj); return true;} catch (e) { return false; }
};
export default IsValidJSON;
