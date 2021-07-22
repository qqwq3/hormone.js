/**
 * name: 数组分块
 * example: chunk([1, 2, 3, 4]); // [[1], [2], [3], [4]]
 *          chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
 *          chunk([1, 2, 3, 4], 3); // [[1, 2, 3], [4]]
 *          chunk([1, 2, 3, 4], 4); // [[1, 2, 3, 4]]
 *          chunk([1, 2, 3, 4], 5); // [[1, 2, 3, 4]]
 * args: array -> 数组；size -> 分块尺寸
 * */
declare const Chunk: (array: any[], size?: number) => any[];
export default Chunk;
