/**
 * name: 删除数组中指定的值
 * example: pull(['a', 'b', 'c'], 'a', 'b'); // ['c']
 * args: arr -> 数组； ...args -> 数组当中元素
 * */

const Pull = (arr: any[], ...args): any[] => {
  const argState = Array.isArray(args[0]) ? args[0] : args;
  const pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return arr;
};
export default Pull;
