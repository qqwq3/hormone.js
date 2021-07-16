/**
 * name: 返回数组中N个最小元素
 * example: minN([1, 2, 3]); // [1]
 *          minN([1, 2, 3], 2); // [1, 2]
 * args: arr -> 数组； n -> 返回几个
 * */
const MinN = (arr: any[], n: number = 1): any[] => [...arr].sort((a, b) => a - b).slice(0, n);
export default MinN;
