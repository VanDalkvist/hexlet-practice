module.exports = function _isHappy(num) {

    function _do(num) {
        if (num === 1) {
            return true;
        }

        let digits = num.toString();

        let squaresSum = Array.from(digits).reduce((sum, digit) => {
            let number = parseInt(digit);
            return sum + number ** 2;
        }, 0);

        console.debug(squaresSum);

        return _do(squaresSum);
    }

    return _do(num);
};