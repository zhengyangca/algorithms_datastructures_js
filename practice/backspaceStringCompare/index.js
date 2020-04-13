/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const refinedS = refineString(S);
    const refinedT = refineString(T);
    return refinedS === refinedT;
};

const refineString = (string) => {
    const chars = string.split('').reverse();
    for (let i = 0; i < chars.length; i++) {
        if(chars[i] === '#') {
            delete chars[i];
            for (let j = i ; j < chars.length; j++) {
                if (chars[j] && chars[j] !== '#') {
                    delete chars[j];
                    break;
                }
            }
        }
    }
    return chars.reverse().join('');;
};

// ### main ###
const S = "ab#c";
const T = "ad#c";
const equal = backspaceCompare(S, T);
console.log(equal);