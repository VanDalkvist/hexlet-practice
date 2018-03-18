module.exports = function _diffOfSums(n) {
    let arr = Array.from(Array(n).keys()).map(number => number + 1);

    // console.log(arr);

    let squareOfSum = arr.reduce((accumulator, current) => accumulator + current, 0) ** 2;
    let sumOfSquares = arr.reduce((accumulator, current) => accumulator + current ** 2, 0);

    console.log('squareOfSum: ' + squareOfSum);
    console.log('sumOfSquares: ' + sumOfSquares);

    return squareOfSum - sumOfSquares;
};