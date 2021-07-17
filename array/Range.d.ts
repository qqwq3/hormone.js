/**
 * name: 初始化特定范围的数字数组
 * example: range(5); // [0, 1, 2, 3, 4, 5]
 *          range(7, 3); // [3, 4, 5, 6, 7]
 *          range(9, 0, 2); // [0, 2, 4, 6, 8]
 * args: end, start, step
 * */
declare const Range: (end: number, start?: number, step?: number) => any[];
export default Range;
