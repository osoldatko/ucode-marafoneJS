function getFormattedDate(incomingDate) {
    let formatD = {
        day: incomingDate.getDate(),
        month: incomingDate.getMonth() + 1,
        year: incomingDate.getFullYear(),
        hours: incomingDate.getHours(),
        minutes: incomingDate.getMinutes(),
        weekday: incomingDate.toLocaleString("en-US", { weekday: 'long' })
    }
    function time(hourOrMin) {
        return String(hourOrMin).length === 1 ? '0' + hourOrMin : hourOrMin;
    }
    function date(dayOrMonth) {
        return String(dayOrMonth).length === 1 ? '0' + dayOrMonth : dayOrMonth;
    }
    return `${date(formatD.day)}.${date(formatD.month)}.${formatD.year} ${time(formatD.hours)}:${time(formatD.minutes)} ${formatD.weekday}`;
}
