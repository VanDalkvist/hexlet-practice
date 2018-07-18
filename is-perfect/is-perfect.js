module.exports = function _isPerfect(n) {
    if (n <= 0) return false;

    function _findDelimiters(n) {
        console.log(n);
        const numbers = Array.from(new Array(Math.round(n / 2)).keys()).map(n => n + 1);
        console.log(numbers);

        return numbers.filter(divider => n % divider === 0);
    }

    return _findDelimiters(n).reduce((sum, number) => sum + number, 0) === n;
};