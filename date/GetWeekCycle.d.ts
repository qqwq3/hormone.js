/**
 * name: 根据年份和月份获取当月有几周
 * example: getWeekCycle({type: '周', date: '2021-07'});
 * // [
 *      {key: 1, text: '第一周', start: '2021-07-01', end: '2021-07-04', data: [{date: '2021-07-01', week: '周四'}, ..., {date: '2021-07-04', week: '周日'}]},
 *      {key: 2, text: '第二周', start: '2021-07-05', end: '2021-07-11', data: [{date: '2021-07-05', week: '周一'}, ..., {date: '2021-07-11', week: '周日'}]},
 *      {key: 3, text: '第三周', start: '2021-07-12', end: '2021-07-18', data: [{date: '2021-07-12', week: '周一'}, ..., {date: '2021-07-18', week: '周日'}]},
 *      {key: 4, text: '第四周', start: '2021-07-19', end: '2021-07-25', data: [{date: '2021-07-19', week: '周一'}, ..., {date: '2021-07-25', week: '周日'}]},
 *      {key: 5, text: '第五周', start: '2021-07-26', end: '2021-07-31', data: [{date: '2021-07-26', week: '周一'}, ..., {date: '2021-07-31', week: '周六'}]}
 *    ]
 * args: {date?, type?}
 * */
interface Props {
    date?: any;
    type?: string;
}
declare const GetWeekCycle: (props?: Props | any) => any[];
export default GetWeekCycle;
