/**
 * name: 计数数组中某个值的出现次数
 * example: countOccurrences(['a', 'a', 'b', 'c'], 'a'); // 2
 * args: array -> 数组; value -> 数组中的元素
 * */
const CountOccurrences = (array: any[], value: any): number => array.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
export default CountOccurrences;
