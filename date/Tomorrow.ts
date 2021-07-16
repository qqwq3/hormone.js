/**
 * name: 明天
 * example: tomorrow(); // '2021-07-17'
 *          tomorrow('2020-05-20'); '2020-05-21'
 * args: value -> 日期：2020-05-20
 * */
const Tomorrow = (value) => new Date((value ? new Date(value).getTime() : new Date().getTime()) + 86400000).toISOString().split('T')[0];
export default Tomorrow;
