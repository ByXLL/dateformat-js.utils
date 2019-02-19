/**
 * 将任意对象转换成时间格式 Date 如果装换失败将返回当前时间
 * @param {any} datetime 时间
 */
export const getDateFormat = (datetime) => {
    let newDate = datetime instanceof Date ? datetime : new Date(Number(datetime));
    if (!newDate.getDate()) {
        newDate = new Date();
    }
    return newDate;
};

/**
 * 日期格式化
 * @param datetime 需要被格式化的时间
 * @param format 格式化字符串，默认为 'YYYY-MM-DD HH:mm:ss'
 */
export const dateFormat = (datetime, format = 'YYYY-MM-DD HH:mm:ss') => {
    let newDate = getDateFormat(datetime);
    let hours = newDate.getHours();

    let date = {
        'M+': newDate.getMonth() + 1,
        'D+': newDate.getDate(),
        'H+': hours, //大写H为24小时制
        'h+': hours > 12 ? hours - 12 : hours, //小写h为12小时制
        'm+': newDate.getMinutes(),
        's+': newDate.getSeconds()
    };
    // 替换 Y
    if (/(Y+)/.test(format)) {
        format = format.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    // 替换 M, D, H, h, m, s
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
