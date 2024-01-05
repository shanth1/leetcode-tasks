/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

//! Long solution
const addBinary1 = (a, b) => {
    let highestBit = 0;
    const reverseAnswer = [];

    const makeOperation = (longNum, shortNum) => {
        for (let index = shortNum.length - 1; index >= 0; index--) {
            const indexForLongNum = longNum.length - shortNum.length + index;
            reverseAnswer.push(
                shortNum[index] ^ longNum[indexForLongNum] ^ highestBit
            );
            highestBit =
                (shortNum[index] & longNum[indexForLongNum]) |
                (shortNum[index] & highestBit) |
                (longNum[indexForLongNum] & highestBit);
        }
        for (
            let index = longNum.length - shortNum.length - 1;
            index >= 0;
            index--
        ) {
            reverseAnswer.push(longNum[index] ^ highestBit);
            highestBit = longNum[index] & highestBit;
        }
        if (highestBit) reverseAnswer.push(1);
    };
    if (a.length >= b.length) {
        makeOperation(a, b);
    } else {
        makeOperation(b, a);
    }

    return reverseAnswer.reverse().join('');
};

//! Short and fast solution
const addBinary2 = (a, b) => (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
