/**
 * name: 日期相加
 * example: addition('2021-07-16', 'Y', 1); // 2022-07-16
 *          addition('2021-07-16', 'Q', 1); // 2021-10-16
 *          addition('2021-07-16', 'M', 1); // 2021-08-16
 *          addition('2021-07-16', 'W', 1); // 2021-07-29
 *          addition('2021-07-16', 'D', 1); // 2021-07-17
 *          addition('2021-07-16 10:30:00', 'h', 2); // 2021-07-16 12:30:00
 *          addition('2021-07-16 10:30:00', 'm', 2); // 2021-07-16 10:32:00
 *          addition('2021-07-16 10:30:00', 's', 2); // 2021-07-16 10:30:02
 * args: date -> 日期，interval -> 类型， number -> 差数
 * */
declare const Addition: (date: string, interval: string, number: number) => string | any;
export default Addition;
