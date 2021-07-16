/**
 * name: 数组取样，随机获取数组中的一个元素
 * example: sample([3, 7, 9, 11]); // 9
 * args: arr -> 数组
 * */
const Sample = arr => arr[Math.floor(Math.random() * arr.length)];
export default Sample;
