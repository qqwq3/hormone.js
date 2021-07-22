/**
 * name: 计数数组中某个值的出现次数
 * example: countOccurrences(['a', 'a', 'b', 'c'], 'a'); // 2
 *          countOccurrences(['a', 'a', 'b', 'c'], r => r === 'a'); // 2
 *          countOccurrences([{name: 'a'}, {name: 'a'}, {name: 'b'}, {name: 'c'}], r => r.name === 'a'); // 2
 *          countOccurrences([[1, 2], [1, 3], [1, 3, 4], [5, 6]], r => r.includes(1)); // 3
 * args: array -> 数组; value -> 数组中的元素或者方法
 * */
declare const CountOccurrences: (array: any[], value: any) => number;
export default CountOccurrences;
