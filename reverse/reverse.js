module.exports = function (str) {
    function _invert(str) {
        if (str.length === 1) {
            return str;
        }

        return str[str.length - 1] + _invert(str.substring(0, str.length - 1));
    }

    return _invert(str);
};