/**
 * name: 初始化特定范围和值的数组
 * example: rangeIdentical(5, 2); // [2, 2, 2, 2, 2]
 * args: n, val
 * */
// @ts-ignore
const RangeIdentical = (n, val = 0) => Array(n).fill(val);
export default RangeIdentical;
