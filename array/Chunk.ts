/**
 * name: 数组分块
 * example: chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
 * args: array -> 数组；size -> 分块尺寸
 * */
const Chunk = (array: any[], size: number = 1): any[] => {
  const arr: any[] = [];
  for (let i = 0; i < array.length; i++) {arr.push(array.slice(i, i + size));}
  return arr;
};
export default Chunk;
