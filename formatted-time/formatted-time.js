module.exports = function _formattedTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const leftMinutes = Math.floor(minutes % 60);
    return `${hours >= 10 ? hours : '0' + hours}:${leftMinutes >= 10 ? leftMinutes : '0' + leftMinutes}`;
};