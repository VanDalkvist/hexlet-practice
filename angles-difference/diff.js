module.exports = function _diff(angle1, angle2) {
    const diff = Math.abs(angle1 - angle2);
    const oppositeDiff = 360 - diff;
    return diff < oppositeDiff ? diff : oppositeDiff;
};