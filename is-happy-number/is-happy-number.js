let iterationsCount = 0;

module.exports = function _isHappy(num) {
    if (num === 0) return false;
    if (num === 1) return true;
    if (iterationsCount === 10) return false;

    const digits = num.toString();

    const reducer = (sum, digit) => sum + parseInt(digit) ** 2;
    const squaresSum = Array.from(digits).reduce(reducer, 0);

    iterationsCount++;
    return _isHappy(squaresSum);
};