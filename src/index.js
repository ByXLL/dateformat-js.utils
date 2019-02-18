/**
 * 将输入的任意对象转换成 Date，如果装换失败将返回当前时间
 * @param  {any} datetime 需要被格式化的时间
 * @return {Date}         转换好的 Date
 */
function getDateObject(datetime) {
    let t = datetime instanceof Date ? datetime : new Date(datetime);
    if (!t.getDate()) {
        t = new Date();
    }
    return t;
}

/**
 * 日期格式化
 * @param timestamp
 * @param format
 */
export const dateFormat = (timestamp, format = 'yyyy/MM/dd hh:mm:ss') => {
    let newDate = new Date(Number(timestamp));

    let date = {
        'M+': newDate.getMonth() + 1,
        'd+': newDate.getDate(),
        'h+': newDate.getHours(),
        'm+': newDate.getMinutes(),
        's+': newDate.getSeconds(),
        'q+': Math.floor((newDate.getMonth() + 3) / 3),
        'S+': newDate.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in date) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length)
            );
        }
    }
    return format;
};
