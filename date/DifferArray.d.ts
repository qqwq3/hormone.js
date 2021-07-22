/**
 * name: 获取两个日期之间时间
 * describe: 结果已数组形式返回
 * example: differArray('2021-07-16', '2021-07-18'); // ['2021-07-16', '2021-07-17', '2021-07-18']
 *          differArray(new Date(), '2021-07-10'); // ['2021-07-10', ..., '2021-07-16']
 *          differArray(new Date(), new Date()); // ['2021-07-16']
 *          differArray(new Date()); // ['2021-07-16', ..., '2021-07-31']
 *          differArray(new Date(), null); // ['2021-07-16', ..., '2021-07-31']
 *          differArray(null, new Date()); // ['2021-07-01', ..., '2021-07-16']
 *          differArray(); // ['2021-07-01', ..., '2021-07-31']
 *          differArray('2020-05-20', new Date('2020-05-25')); // ['2020-05-20', ..., '2020-05-25']
 * args: d1, d2
 * */
declare const DifferArray: (d1?: any, d2?: any) => any;
export default DifferArray;
