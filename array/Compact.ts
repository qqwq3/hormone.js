/**
 * name: 数组过滤
 * example: compact([1, 0, false, '', 'e' * 23, NaN, null, undefined]); // [1]
 * args: array -> 数组
 * */

const Compact = (array: any[]): any[] => array.filter(Boolean);
export default Compact;
