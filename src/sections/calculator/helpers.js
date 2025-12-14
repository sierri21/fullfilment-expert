export function decimal(number, precision = 2, locale = 'ru-RU') {
    if (!number) {
        return ''
    }
    const rounded = Number(number.toFixed(precision));
    return rounded.toLocaleString(locale, {
        minimumFractionDigits: 0,
        maximumFractionDigits: precision
    });
}