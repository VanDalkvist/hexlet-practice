module.exports = function withoutTwoZeros(zeroCount, oneCount) {
    const count = zeroCount + oneCount;
    if (zeroCount === 1 || zeroCount === 0) {
        return _combinations(count, zeroCount);
    }

    return _combinations(count, 2) - (count - 1);
};

function _combinations(n, k) {
    return _factorial(n) / (_factorial(k) * _factorial(n - k));
}

function _factorial(n) {
    if (n === 0) return 1;

    function _iteration(n, acc) {
        if (n === 1) return acc;

        return _iteration(n - 1, n * acc);
    }

    return _iteration(n, 1);
}