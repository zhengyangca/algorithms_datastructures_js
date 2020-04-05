/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const sortedNums = nums.sort().reverse();
    console.log(sortedNums);
    let result;

    if (sortedNums.length <= 1) {
        return sortedNums[0];
    }

    if (sortedNums.length > 1 && sortedNums[0] !== sortedNums[1]) {
        result = sortedNums[0];
    }

    if (sortedNums.length > 1 && sortedNums[sortedNums.length - 1] !== sortedNums[sortedNums.length - 2]) {
        result = sortedNums[sortedNums.length - 1];
    }

    for (i = 1; i < nums.length - 1; i++) {
        if ((sortedNums[i] !== sortedNums[i - 1]) && (sortedNums[i] !== sortedNums[i + 1])) {
            result = sortedNums[i];
        }
    }
    return result;
};

const nums = [2,3,4,5,6,1,5,4,3,2,1];

// best solution *********
const singleNumber2 = (nums) => {
    let x = 0;
    for (i = 0; i < nums.length; i++) {
        x = x ^ nums[i];
        console.log(`i = ${i}, nums[${i}] = ${nums[i]}, x = ${x}`);
    }
    return x;
}

// ***********************


const result = singleNumber2(nums);
console.log(result);