/**
 * name: 深拷贝
 * example: const a = [1, 2, 3];
 *          const b = clone(a);
 *          a[0] = 6;
 *          console.log('a', a); // [6, 2, 3]
 *          console.log('b', b); // [1, 2, 3]
 * args: source
 * */
declare const Clone: (source?: any) => any;
export default Clone;
