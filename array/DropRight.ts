/**
 * name: 从右开始删除数组元素
 * describe: 返回从右开始删除 n个元素的新数组
 * example: dropRight([1, 2, 3, 4], 2); // [1, 2]
 * args: array -> 数组; n -> 删除元素个数
 * */

const DropRight = (array: any[], n: number = 1): any[] => array.slice(0, -n);
export default DropRight;
