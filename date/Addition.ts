/**
 * name: 日期相加
 * example: addition('Y', 1, '2021-07-16'); // 2022-07-16
 *          addition('M', 1, '2021-07-16'); // 2021-08-16
 *          addition('D', 1, '2021-07-16'); // 2021-07-17
 * args: date -> 日期，interval -> 类型， number -> 差数
 * */
import IsNumber from "../type/IsNumber";
import IsDate from "../type/IsDate";
import Format from "./Format";

const Addition = (date, interval, number) => {
  let d = new Date();
  const n = IsNumber(number) ? number : Number(number);
  if (IsDate(date)) {d = date;}
  else {d = new Date(Format(date));}
  switch (interval) {
    // year
    case 'Y': d.setFullYear(d.getFullYear() + n); return Format(d); break;
    // quarter
    case 'Q': d.setMonth(d.getMonth() + n * 3); return Format(d); break;
    // month
    case 'M': d.setMonth(d.getMonth() + n); return Format(d); break;
    // week
    case 'W': d.setDate(d.getDate() + n * 7); return Format(d); break;
    // day
    case 'D': d.setDate(d.getDate() + n); return Format(d); break;
    // hours
    case 'h': d.setHours(d.getHours() + n); return Format(d); break;
    // minutes
    case 'm': d.setMinutes(d.getMinutes() + n); return Format(d); break;
    // seconds
    case 's': d.setSeconds(d.getSeconds() + n); return Format(d); break;
  }
};
export default Addition;
