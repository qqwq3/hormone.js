/**
 * name: 获取原生类型的值
 * example: getType(new Set([1, 2, 3])); // 'set'
 * args: v -> 值
 * */

const GetType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
export default GetType;
