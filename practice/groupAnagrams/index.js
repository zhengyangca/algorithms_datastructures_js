/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    let output = [];
    let letters;

    strs.forEach((str) => {
        letters = str.split('').sort();
        if (hash[letters]) {
            hash[letters].push(str);
        } else {
            hash[letters] = [str];
        }
    });
    const keys = Object.keys(hash);
    console.log(keys);
    output = keys.map((key)=>{
        return hash[key];
    });
    return output;
};

const strs = ["eat","tea","tan","ate","nat","bat"];

const output = groupAnagrams(strs);
console.log(output);