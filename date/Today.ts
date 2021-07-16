/**
 * name: 今天
 * example: toDay(); // '2021-07-17'
 *          toDay('2020-05-20'); '2020-05-20'
 * args: value -> 日期：2020-05-20
 * */
const ToDay = (value) => new Date((value ? new Date(value).getTime() : new Date().getTime())).toISOString().split('T')[0];
export default ToDay;
