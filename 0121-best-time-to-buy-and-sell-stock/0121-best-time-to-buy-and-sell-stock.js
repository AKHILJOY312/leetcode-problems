/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max_profit = 0;
    let min_value = prices[0];

    for (let price of prices) {
        if (min_value > price) {
            min_value = price;
        } else {
            max_profit = Math.max(max_profit, price - min_value);
        }
    }

    return max_profit
};