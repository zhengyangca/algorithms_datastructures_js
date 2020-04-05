/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSum = nums[0] >= 0? 0: nums[0];

    for(i = 0; i < nums.length; i++) {
        currentSum = Math.max((currentSum + nums[i]), nums[i]); // reset if there is a big negetive value
        maxSum = Math.max(currentSum, maxSum); // get the largest sum for each fragment
    }
    return maxSum;
};