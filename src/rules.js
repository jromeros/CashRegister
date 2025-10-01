const calculateChange = require("./calculator");
const calculateRandomChange = require("./randomCalculator");
const { formatChange } = require("./formatter");  // ✅ must match
const config = require("./config");
const parseLine = require("./parser");


function processLine(line) {
    const { owed, paid } = parseLine(line);

    if (isNaN(owed) || isNaN(paid)) return "Invalid input";
    if (paid < owed) return "Insufficient payment";
    if (paid === owed) return "No change";

    let change;
    if (owed % config.randomDivisor === 0) {
        change = calculateRandomChange(owed, paid, config.denominations);
    } else {
        change = calculateChange(owed, paid, config.denominations);
    }

    return formatChange(change);
}

module.exports = processLine;
