/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shifts) {
    let result;
    if (!s) {
        return s;
    }
    let realShift = [0, 0];
    shifts.forEach(shift => {
        if (shift[0] === 0) {
            realShift[1] -= shift[1];
        } else {
            realShift[1] += shift[1];
        }
        realShift[0] = realShift[1] > 0 ? 1 : 0;
    });

    realShift[1] = Math.abs(realShift[1] % s.length);

    console.log(realShift);
    //shift
    if(realShift[1] === 0) {
        return s;
    }
    if (realShift[0] === 1) {
        const shiftSubstring = s.slice(-realShift[1]);
        result = shiftSubstring.concat(s.substring(0, s.length - realShift[1]));
    } else {
        const shiftSubstring = s.slice(0, realShift[1]);
        result = s.substring(realShift[1]).concat(shiftSubstring);
    }
    return result;
};

// main
const rawString = "joiazl";
const shifts = [[1, 1], [1, 6], [0, 1], [1, 3], [1, 0], [0, 3]];
const result = stringShift(rawString, shifts);
console.log(result);