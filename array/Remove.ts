/**
 * name: 移除数组中的元素
 * example: remove([1, 2, 3, 4], n => n % 2 == 0); // [2, 4]
 * args: arr -> 数组； func(value, index, array) -> 方法
 * */
const Remove = (arr, func) => Array.isArray(arr) ? arr.filter(func).reduce((acc, val) => {
  arr.splice(arr.indexOf(val), 1); return acc.concat(val);
}, []) : [];
export default Remove;
