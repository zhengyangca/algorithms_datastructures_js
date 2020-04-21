/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // let result = [];
    // let product = 1;
    // let zeros = 0;
    // nums.forEach(num => {
    //     product *= num === 0 ? 1 : num;
    //     num += num === 0 ? 1 : 0;
    // });

    // nums.forEach((num, i) => {
    //     if (num === 0 && zeros === 1) {
    //         result[i] = product;
    //     } else {
    //         if (product === 0 && zeros === 2) {
    //             result[i] = 0;
    //         } else {
    //             product[i] = product / num;
    //         }
    //     }
    //     result[i] = num === 0 ? product : product / num;
    // });
    // return result;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if(i !== j) {
                product *= nums[j];
            }
        }
        result[i] = product;
    }
    return result;
};

const nums = [1, 0];
const result = productExceptSelf(nums);
console.log(result);