/**
 * name: 数组交集
 * example: intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
 * args: a -> 数组； b -> 数组
 * */
const Intersection = (a, b) => {
  // @ts-ignore
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
export default Intersection;
