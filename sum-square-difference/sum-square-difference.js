function _sumOfSquares(array) {
    return array.reduce((accumulator, current) => accumulator + current ** 2, 0);
}

function _diffOfSums(n) {
    let arr = Array.from(Array(n).keys()).map(number => number + 1);

    console.debug(arr);

    let squareOfSum = arr.reduce((accumulator, current) => accumulator + current, 0) ** 2;
    let sumOfSquares = _sumOfSquares(arr);

    console.log('squareOfSum: ' + squareOfSum);
    console.log('sumOfSquares: ' + sumOfSquares);

    return squareOfSum - sumOfSquares;
}

module.exports = {
    sumOfSquares: _sumOfSquares,
    diff: _diffOfSums
};