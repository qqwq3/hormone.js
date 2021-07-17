/**
 * name: 删除数组中的元素
 * example: drop([1, 2, 3, 4], n => n >= 3); // [3, 4]
 * args: array -> 数组；func -> 方法
 * */
declare const Drop: (array: any[], func: (any: any) => void) => any[];
export default Drop;
