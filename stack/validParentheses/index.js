/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const check = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    const stack = [];

    for (const i of s) {
        if (check[i]) {
            stack.push(check[i]);
        } else if (i !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
};
