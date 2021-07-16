/**
 * name: 类型检查
 * example: typeCheck('1'); // String
 * args: val -> 值
 * */
const TypeCheck = val => {
  const typeArr = ['String', 'Object', 'Number', 'Array', 'Function', 'Null', 'Undefined', 'Symbol', 'Boolean', 'Date'];
  const o = Object.prototype.toString.call(val);
  const v = (o.split('object')[1]).split(']')[0];
  const m = v.replace(/\s/g, '');
  if (typeArr.indexOf(m) >= 0) { return m }
  else { console.error('type check：', `${m} This type is not in the JavaScript type`) }
};
export default TypeCheck;
