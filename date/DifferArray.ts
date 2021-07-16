/**
 * name: 获取两个日期之间时间
 * describe: 结果已数组形式返回
 * example: differArray('2021-07-16', '2021-07-18'); // ['2021-07-16', '2021-07-17', '2021-07-18']
 * args: d1, d2, t
 * */
import DifferDays from "./DifferDays";
import Addition from "./Addition";
import Compare from "./Compare";

const DifferArray = (d1, d2, t = 'D') => {
  const days = DifferDays(d1, d2);
  const array = [];
  for (let i = 0; i <= days; i++) {
    const date = Compare(d1, d2) ? new Date(d2) : new Date(d1);
    const item = Addition(date, t, i);
    array.push(item);
  }
  return array;
};
export default DifferArray;
