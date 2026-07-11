/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minValue = prices[0];

    for (let price of prices) {
        if (minValue > price) {
            minValue = price;
        } else {
            maxProfit = Math.max(maxProfit, price - minValue);
        }
    }

    return maxProfit
};