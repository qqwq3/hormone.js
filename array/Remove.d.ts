/**
 * name: 移除数组中的元素
 * example: remove([1, 2, 3, 4], n => n % 2 == 0); // [2, 4]
 * args: arr -> 数组； func(value, index, array) -> 方法
 * */
declare const Remove: (arr: any[], func: (value: any, index: number, array: any[]) => void) => any[];
export default Remove;
