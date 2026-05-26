/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {

    // absence should be less than 2
    const AbsentCount = (s.match(/A/g) || []).length;
    if (AbsentCount >= 2) return false;

    // should not contain 3 consecutive L
    if (s.includes("LLL")) return false;

    return true;
};