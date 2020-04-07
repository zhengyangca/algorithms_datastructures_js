/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let result = [];
    let hash = {};

    items.forEach(item => {
        if (hash[item[0]]) {
            hash[item[0]].push(item);
        } else {
            hash[item[0]] = [item];
        }
    });

    Object.keys(hash).forEach(id => {
        hash[id].sort((a, b) => {
            return b[1] - a[1];
        });

        let sum = 0;
        for (let i = 0; i < 5; i++) {
            sum += hash[id][i][1];
        }
        const ave = Math.floor(sum/5);

        result.push([id, ave]);
    });

    return result;
};

const items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]];
const result = highFive(items);
console.log(result);
