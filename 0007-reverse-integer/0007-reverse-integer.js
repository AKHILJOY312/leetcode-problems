/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isNegative = x < 0;
    let r = ""
    x = Math.abs(x)
    while (x !== 0) {
        let temp = x % 10;
        r += temp;
        x = Math.trunc(x / 10);
    }
    r = Number(r);

    if (isNegative) {
        r = -r;
    }
    if (r < -(2 ** 31) || r > (2 ** 31) - 1) {
        return 0;
    }
    return r;
};