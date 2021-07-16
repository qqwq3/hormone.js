/**
 * name: 返回数组中N个最大元素
 * example: maxN([1, 2, 3]); // [3]
 *          maxN([1, 2, 3], 2); // [3, 2]
 * args: arr -> 数组； n -> 返回几个
 * */

const MaxN = (arr: any[], n: number = 1): any[] => [...arr].sort((a, b) => b - a).slice(0, n);
export default MaxN;
