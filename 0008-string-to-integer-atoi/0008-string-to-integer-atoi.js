/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

    //seting borders
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;

    // Step 1: Skip leading whitespace
    s = s.trimStart();
    let i = 0;
    let end = s.length - 1;

    // Step 2: Handle sign selection
    let sign = 1;
    if (s[0] === "-") { sign = -1; i++ }
    else if (s[0] === "+") {
        sign = 1; i++;
    };
    let res = 0;

    // Step 3: Convert digit characters
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        let digit = s[i] - "0";

        if (res > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        res = res * 10 + digit;
        i++;
    }

    return sign * res

};