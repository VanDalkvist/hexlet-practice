module.exports = function* _fizzBuzz(start, end) {

    if (end - start <= 0) {
        throw new Error('Invalid range.');
    }

    const arr = Array.from(new Array(end - start + 1).keys()).map(el => el + start);

    for (let value of arr) {
        let isThreeDividend = value % 3 === 0;
        let isFiveDividend = value % 5 === 0;
        if (isThreeDividend && isFiveDividend) {
            yield 'FizzBuzz';
        } else if (isThreeDividend) {
            yield 'Fizz';
        } else if (isFiveDividend) {
            yield 'Buzz';
        } else {
            yield value;
        }
    }
};