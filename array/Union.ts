/**
 * name: 获取数组合集
 * example: union([1, 2, 3], [1, 4, 5]]); // [1, 2, 3, 4, 5]
 * args: a -> 数组； b -> 数组
 * */
// @ts-ignore
const Union = (a, b) => Array.from(new Set([...a, ...b]));
export default Union;
