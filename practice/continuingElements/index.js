/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let set = new Set();
    let count = 0;
    arr.forEach((element) => {
        set.add(element);
    });

    arr.forEach((element) => {
        if(set.has(element + 1)) {
            count ++;
        }
    });
    return count;
};

const arr = [1,1,5,3,2,3];

const count = countElements(arr);
console.log(count);