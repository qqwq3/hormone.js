/**
 * name: 数组差集
 * describe: 返回两个数组之间的差异
 * example: difference([1, 2, 3], [1, 2, 4]); // [3, 4]
 * args: a -> 数组1；b -> 数组2
 * */
const Difference = (a, b) => {
  // @ts-ignore
  const sA = new Set(a), sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};
export default Difference;
