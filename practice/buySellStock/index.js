/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxPro = 0;
    let profit;
    let rest;
    let buy;
    let sell;

    prices.forEach((buy, buyIndex) => {
        rest = [...prices].splice(buyIndex + 1); // copy an array
        if (rest.length > 0) {
            sell = Math.max(...rest);
            console.log('buy = ', buy, 'sell=', sell);
        }
        profit = sell - buy;
        if (sell && (buy < sell)) {
            console.log('profit:', profit);
            maxPro = Math.max(profit, maxPro);
        }
    });

    return maxPro;
};

const prices = [7, 1, 5, 3, 6, 4];

const profit = maxProfit(prices);
console.log(profit);