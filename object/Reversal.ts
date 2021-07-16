/**
 * name: 反转对象的键值对
 * example: reversal({ name: 'John', age: 20 }); // { 20: 'age', John: 'name' }
 * args: obj
 * */
const Reversal = obj =>  Object.keys(obj).reduce((acc, key) => {acc[obj[key]] = key; return acc;}, {});
export default Reversal;
