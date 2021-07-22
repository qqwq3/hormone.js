/**
 * name: 是否为有效的JSON
 * example: isValidJSON('{"name":"Adam","age":20}'); // true
 *          isValidJSON('{"name":"Adam",age:"20"}'); // false
 *          isValidJSON(''); // false
 * args: obj -> 值
 * */
declare const IsValidJSON: (obj: any) => boolean;
export default IsValidJSON;
