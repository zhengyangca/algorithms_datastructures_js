/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let left = 0, right = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        switch (char) {
            case '(':
                left++;
                break;
            case ')':
                if(left === 0) {
                    return false;
                }
                right ++;
                break;
            case '*':
                if(left > right) {
                    right ++;
                } else {
                    left++;
                }
                break;
            default:
                break;
        }
    }
    console.log(left, right);
    
    return left === right;
};

const s = '(())((())()()(*)(*()(())())())()()((()())((()))(*';
const result = checkValidString(s);
console.log(result);