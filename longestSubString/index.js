/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const letters = s.split('');
    let maxLength = 0;
    let set;
    for (let i = 0; i < letters.length; i++) {
        set = new Set();
        set.add(letters[i]);
        for (let j = i + 1; j < letters.length; j++) {
            if (set.has(letters[j])) {
                break;
            }
            set.add(letters[j]);
        }
        console.log(set);
        maxLength = Math.max(maxLength, set.size);
    }
    
    return maxLength;
};

const s = "pwwkew";
const length = lengthOfLongestSubstring(s);

console.log(length);