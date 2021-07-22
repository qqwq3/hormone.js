/**
 * name: 日期相减
 * example: subtract('2021-07-16', 'Y', 1); // 2020-07-16
 *          subtract('2021-07-16', 'Q', 1); // 2021-04-16
 *          subtract('2021-07-16', 'M', 1); // 2021-06-16
 *          subtract('2021-07-16', 'W', 1); // 2021-07-09
 *          subtract('2021-07-16', 'D', 1); // 2021-07-15
 *          subtract('2021-07-16 10:30:00', 'h', 2); // 2021-07-16 08:30:00
 *          subtract('2021-07-16 10:30:00', 'm', 2); // 2021-07-16 10:28:00
 *          subtract('2021-07-16 10:30:00', 's', 2); // 2021-07-16 10:29:58
 * args: date -> 日期，interval -> 类型， number -> 差数
 * */
declare const Subtract: (date: string, interval: string, number: number) => string | any;
export default Subtract;
