module.exports = function _isPerfect(n) {

    function _findDelimiters(n) {
        const numbers = Array.from(new Array(Math.round(n / 2)).keys()).map(n => n + 1);

        return numbers.filter(divider => n % divider === 0);
    }

    return _findDelimiters(n).reduce((sum, number) => sum + number) === n;
};