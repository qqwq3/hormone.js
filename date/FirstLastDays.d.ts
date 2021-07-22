/**
 * name: 获取月份的第一天与最后一天
 * describe: 返回数组
 * example: firstLastDays(); // [2021-07-01, 2021-07-31]
 *          firstLastDays(new Date()); // [2021-07-01, 2021-07-31]
 *          firstLastDays('2021-05-20'); // [2021-05-01, 2021-05-31]
 *          firstLastDays('2021-05'); // [2021-05-01, 2021-05-31]
 *          firstLastDays('2021'); // [2021-01-01, 2021-01-31]
 * args: date
 * */
declare const FirstLastDays: (date?: any) => any[];
export default FirstLastDays;
