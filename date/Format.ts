/**
 * name: 日期格式化
 * example: format('2021/7/16', 'YYYY-MM-DD'); // 2021-07-16
 *          format(new Date(), 'YYYY-MM-DD hh:mm:ss') // 2021-07-16 12:30:30
 * args: date, type
 * */
import IsDate from "../type/IsDate";
import IsString from "../type/IsString";

const Format = (date, type= 'YYYY-MM-DD') => {
  // @ts-ignore
  Date.prototype.format = function (fmt) {
    let o = {
      "M+": this.getMonth() + 1, // 月份 - month
      "D+": this.getDate(), // 日 - date
      "h+": this.getHours(), // 小时 - hours
      "m+": this.getMinutes(), // 分 - minutes
      "s+": this.getSeconds(), // 秒 - seconds
      "q+": Math.floor((this.getMonth() + 3) / 3), // 季度 - quarter
      "S": this.getMilliseconds() // 毫秒 - seconds
    };
    if (/(Y+)/.test(fmt)) {fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));}
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  };
  if (IsDate(date) || IsString(date)) {
    // @ts-ignore
    return new Date(date).format(type);
  }
  return date;
};
export default Format;
