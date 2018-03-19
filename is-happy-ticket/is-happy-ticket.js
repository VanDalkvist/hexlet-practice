module.exports = function _isHappyTicket(ticket) {

    const number = ticket.toString();

    if (number.length !== 6) {
        throw new Error("Ticket should has six digits.");
    }

    const first = number.substring(0, 3);
    const second = number.substring(3, 6);

    const firstSum = _digitsSum(first);
    const secondSum = _digitsSum(second);

    return firstSum === secondSum;
};

function _digitsSum(number) {
    return Array.from(number.toString()).reduce((sum, digit) => sum + parseInt(digit), 0);
}