let reverse = require('../reverse/reverse');

module.exports = function _reverseInt(number) {
    return Math.sign(number) * parseInt(reverse(Math.abs(number).toString()));
};