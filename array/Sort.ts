/**
 * name: 数组排序(采用冒泡法实现数组排序)
 * example: sort([2, 1, 3]); // [1, 2, 3]
 * args: arr -> 数组
 * */
const Sort = arr => {
  if (arr.length <= 1) {return arr}
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = i; j < len; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
export default Sort;
