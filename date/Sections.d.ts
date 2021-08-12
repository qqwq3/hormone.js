/**
 * name: 时间分段
 * example: sections({num: 6});                            // ["04:00", "08:00", "12:00", "16:00", "20:00", "00:00"]
 *          sections({num: 6, hours: 1});                  // ["05:00", "09:00", "13:00", "17:00", "21:00", "01:00"]
 *          sections({num: 6, min: 30});                   // ["04:30", "08:30", "12:30", "16:30", "20:30", "00:30"]
 *          sections({num: 6, min: 30, form: 'hh:mm:ss'}); // ["04:30:00", "08:30:00", "12:30:00", "16:30:00", "20:30:00", "00:30:00"]
 *          sections({num: 6, sec: 45, form: 'hh:mm:ss'}); // ["04:00:45", "08:00:45", "12:00:45", "16:00:45", "20:00:45", "00:00:45"]
 * args:
 * */
interface Props {
    num: number;
    form?: string;
    hours?: number;
    min?: number;
    sec?: number;
}
declare const Sections: ({ num, form, hours, min, sec }: Props) => string[];
export default Sections;
