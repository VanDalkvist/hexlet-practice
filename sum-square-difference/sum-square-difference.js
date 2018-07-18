function _sumOfSquares(array) {
    return array.reduce((accumulator, current) => accumulator + current ** 2, 0);
}

function _diffOfSums(n) {
    const arr = Array.from(Array(n).keys()).map(number => number + 1);

    const squareOfSum = arr.reduce((accumulator, current) => accumulator + current, 0) ** 2;
    const sumOfSquares = _sumOfSquares(arr);

    return squareOfSum - sumOfSquares;
}

module.exports = {
    diff: _diffOfSums
};