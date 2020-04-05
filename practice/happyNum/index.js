/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
    let happySet = new Set();
    while((n !== 1) && !happySet.has(n)) {
        happySet.add(n);
        console.log(`added ${n}, chain =`, happySet);
        n = getNext(n);
    }

    return n === 1;
};

const getNext = (num) => {
    const numArray = num.toString().split('');
    let sum = 0;
    numArray.forEach((num) => {
        sum += Math.pow(parseInt(num), 2);
    });
    return sum;
};

const num = 2;

const result = isHappy(num);

console.log('num = ', num, 'result = ', result);

