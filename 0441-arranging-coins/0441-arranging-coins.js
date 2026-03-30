/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let left = 1;
    let right = n;
    let ans = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let coins = mid * (mid + 1) / 2;

        if (coins === n) {
            return mid
        }
        if (coins < n) {
            ans = mid
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans
};