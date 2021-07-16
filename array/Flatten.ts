/**
 * name: 深度平铺数组
 * example: flatten([1, [2, [3, [4]]]]); // [1, 2, 3, 4];
 * args: array -> 数组
 * */
const Flatten = (array: any[]): any[] => [].concat(...array.map(value => (Array.isArray(value) ? Flatten(value) : value)));
export default Flatten;
