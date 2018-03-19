const precision = 0.00001;

module.exports = function _isPowerOfThree(number) {
    const res = _getBasedLog(3, number);
    return Math.abs(res - Math.floor(res)) < precision;
};

function _getBasedLog(base, number) {
    return Math.log(number) / Math.log(base);
}