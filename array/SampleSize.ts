/**
 * name: 从数组中随机获取 n 个元素
 * example: sampleSize([1, 2, 3], 2); // [3, 1]
 *          sampleSize([1, 2, 3], 4); // [2, 3, 1]
 * args: arr -> 数组
 * */
const SampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};
export default SampleSize;
