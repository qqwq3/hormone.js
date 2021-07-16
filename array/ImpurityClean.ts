/**
 * name: 数组杂质清理
 * example: impurityClean([1, false, null, undefined, '', {}, [], 2]); // [1, 2]
 * args: array -> 数组
 * */
import CheckEmpty from "../type/CheckEmpty";
import IsArray from "../type/IsArray";
import IsBoolean from "../type/IsBoolean";

const ImpurityClean = array => {
  let temp = [];
  if (IsArray(array)) {return console.warn('请传入数组类型的参数');}
  if (array && array.length === 0) {return array || [];}
  for (let i = 0; i < array.length; i++) {
    const v = array[i];
    if (!CheckEmpty(v) && !IsBoolean(v) && !NaN) {temp.push(v)}
  }
  return temp;
};
export default ImpurityClean;
