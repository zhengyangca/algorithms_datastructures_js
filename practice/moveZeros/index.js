/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0;
    let lastNonZeroIndex = nums.length - 1;
    while (i != lastNonZeroIndex) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            lastNonZeroIndex --;
            continue;
        }
        i++;
    }

};

// const nums = [0, 0, 1];
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums)
console.log(nums);