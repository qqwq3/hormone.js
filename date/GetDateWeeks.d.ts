/**
 * name: 获取日期和周
 * describe: 以数组的形式返回
 * example: getDateWeeks({start: '2021-07-01', end: '2021-07-05'}); // [{date: '2021-07-01', week: '星期四'}, {date: '2021-07-02', week: '星期五'}, ...]
 *          getDateWeeks({start: '2021-07-01', end: '2021-07-05', type: '周'}); // [{date: '2021-07-01', week: '周四'}, {date: '2021-07-02', week: '周五'}, ...]
 *          getDateWeeks({date: '2021-07'}); // [{date: '2021-07-01', week: '星期四'}, ...]
 *          getDateWeeks({start: '2021-07-01', end: '2021-07-05', date: '2021-07'}); // [{date: '2021-07-01', week: '星期四'}, ..., {date: '2021-07-05', week: '星期一'}]
 *          getDateWeeks(); // [{date: '2021-07-01', week: '星期四'}, ..., {date: '2021-07-31', week: '星期六'}]
 *          getDateWeeks(null); // [{date: '2021-07-01', week: '星期四'}, ..., {date: '2021-07-31', week: '星期六'}]
 *          getDateWeeks({end: '2021-07-05', date: '2021-07'}); // [{date: '2021-07-01', week: '星期四'}, ..., {date: '2021-07-05', week: '星期一'}]
 *          getDateWeeks({end: '2021-07-05'}); // [{date: '2021-07-01', week: '星期四'}, ..., {date: '2021-07-05', week: '星期一'}]
 *          getDateWeeks({start: '2021-07-21', date: '2021-07'}); // [{date: '2021-07-21', week: '星期三'}, ..., {date: '2021-07-31', week: '星期六'}]
 *          getDateWeeks({start: '2021-07-21'}); // [{date: '2021-07-21', week: '星期三'}, ..., {date: '2021-07-31', week: '星期六'}]
 *          getDateWeeks({start: new Date(), type: '周'}); // [{date: '2021-07-22', week: '周四'}, ..., {date: '2021-07-31', week: '周六'}]
 *          getDateWeeks({type: '周'}); // [{date: '2021-07-01', week: '周四'}, ..., {date: '2021-07-31', week: '周六'}]
 * args: {start, end, date}
 * */
export interface Props {
    start?: string;
    end?: string;
    date?: any;
    type?: string;
}
declare const GetDateWeeks: (objs?: Props | any) => any[];
export default GetDateWeeks;
