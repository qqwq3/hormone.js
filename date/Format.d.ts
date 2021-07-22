/**
 * name: 日期格式化
 * example: format('2021/7/16', 'YYYY-MM-DD'); // 2021-07-16
 *          format('2021/7/16', 'YYYY'); // 2021
 *          format('2021/7/16', 'YYYY-MM'); // 2021-07
 *          format('2021/7/16', 'M'); // 7
 *          format('2021/7/16', 'D'); // 16
 *          format(new Date(), 'YYYY-MM-DD hh:mm:ss') // 2021-07-16 12:30:30
 *          format(null, 'YYYY'); // 2021 -> 最新年份
 *          format(null, 'YYYY-MM'); // 2021-07 -> 最新月份
 *
 *          const s = Format('2021/7/16');
 *          console.log(new Date(s).getMonth() + 1); // 7
 * args: date, type
 * */
declare const Format: (date: any, type?: string) => string | any;
export default Format;
