function parseLine(line) {
    const [owedStr, paidStr] = line.split(',');
    return {
        owed: Math.round(parseFloat(owedStr) * 100), // work in cents
        paid: Math.round(parseFloat(paidStr) * 100),
    };
}

module.exports = parseLine;
