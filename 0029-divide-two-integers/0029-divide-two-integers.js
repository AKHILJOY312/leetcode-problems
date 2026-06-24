/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let result = Math.floor(Math.abs(dividend) / Math.abs(divisor));

    result = (dividend < 0) ^ (divisor < 0)
        ? -result
        : result;

    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;

    return result;
};