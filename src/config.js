// Denominations (USD by default)
const denominationsUSD = [
    { name: "dollar", value: 100 },
    { name: "quarter", value: 25 },
    { name: "dime", value: 10 },
    { name: "nickel", value: 5 },
    { name: "penny", value: 1 },
];

// Configuration object
const config = {
    currency: "USD",
    denominations: denominationsUSD,
    randomDivisor: 3, // If owed % divisor === 0 → randomize change
};

module.exports = config;
