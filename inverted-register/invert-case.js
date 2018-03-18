module.exports = function _invert(string) {
    return [...string].map(function (char) {
        return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
    }).join('');
};