/**
 * name: 获取原生类型的值
 * example: getType(new Set([1, 2, 3])); // 'set'
 *          getType(new Map()); // 'map'
 *          getType(Promise); // 'function'
 *          getType(new Promise((resolve, reject) => resolve())); // 'promise'
 *          getType([]); // 'array'
 *          getType(false); // 'boolean'
 *          getType(1); // 'number'
 *          getType(null); // null
 *          getType(''); // 'string'
 *          getType(); // 'undefined'
 *          getType(undefined); // 'undefined'
 *          getType(Symbol('x')); // 'symbol'
 * args: v -> 值
 * */
declare const GetType: (v: any) => string;
export default GetType;
