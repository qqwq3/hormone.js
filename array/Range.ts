/**
 * name: 初始化特定范围的数字数组
 * example: range(5); // [0, 1, 2, 3, 4, 5]
 *          range(7, 3); // [3, 4, 5, 6, 7]
 *          range(9, 0, 2); // [0, 2, 4, 6, 8]
 * args: end, start, step
 * */
// @ts-ignore
const Range = (end, start = 0, step = 1) => Array.from({ length: Math.ceil((end + 1 - start) / step) }).map((v, i) => i * step + start);
export default Range;
