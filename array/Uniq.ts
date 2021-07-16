/**
 * name: 数组去重
 * example: uniq([1, 1, 2, 3]); // [1, 2, 3]
 * args: array -> 数组
 * */

// @ts-ignore
const Uniq = (array: any[]): any[] => [...new Set(array)];
export default Uniq;
