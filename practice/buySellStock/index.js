/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;

    for(i = 0; i< prices.length; i++) {
        const diff = prices[i + 1] - prices[i];
        if(diff > 0) {
            profit += diff;
        }
    }

    return profit;
};

const prices = [7, 1, 5, 3, 6, 4];

const profit = maxProfit(prices);
console.log(profit);