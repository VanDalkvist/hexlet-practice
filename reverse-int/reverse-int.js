let reverse = require('../reverse/reverse');

module.exports = function _reverseInt(number) {

    let negative = false;
    if (number < 0) {
        negative = true;
    }

    const reversed = parseInt(reverse(Math.abs(number).toString()));

    return negative ? -reversed : reversed;
};