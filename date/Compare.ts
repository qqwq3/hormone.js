/**
 * name: 日期对比
 * example: compare('2021-07-16', '2021-07-10'); // true
 * args: newData -> 当天时间, oldDate -> 历史时间
 * */
const Compare = (newDate, oldDate) => (new Date(newDate.replace(/-/g, '\/'))) > (new Date(oldDate.replace(/-/g, '\/')));
export default Compare;
