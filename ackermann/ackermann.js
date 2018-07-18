module.exports = function _ackermann(m, n) {
    if (m < 0 || n < 0) {
        return undefined;
    }

    if (m === 0) {
        return n + 1;
    }

    if (n === 0 && m > 0) {
        return _ackermann(m - 1, 1);
    }

    if (n > 0 && m > 0) {
        return _ackermann(m - 1, _ackermann(m, n - 1));
    }
};