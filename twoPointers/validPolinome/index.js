/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

//? Alternative solution
function isPalindrome2(s) {
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = cleanedString.split('').reverse().join('');

    return cleanedString === reversedString;
}
