module.exports = function (str) {
    function _invert(str) {
        if (str.length === 1) {
            return str;
        }

        let last = str.length - 1;
        return str[last] + _invert(str.substring(0, /* here is index of first excluded item */ last ));
    }

    return _invert(str);
};