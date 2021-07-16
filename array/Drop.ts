/**
 * name: 删除数组中的元素
 * example: drop([1, 2, 3, 4], n => n >= 3); // [3, 4]
 * args: array -> 数组；func -> 方法
 * */

const Drop = (array: any, func) => {
  while (array.length > 0 && !func(array[0])) array = array.slice(1);
  return array;
};
export default Drop;
