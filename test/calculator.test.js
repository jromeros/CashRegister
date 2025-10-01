const calculateChange = require("../src/calculator");
const config = require("../src/config");

describe("calculateChange", () => {
    test("returns correct change for 2.12 owed and 3.00 paid", () => {
        const owed = 212;
        const paid = 300;
        const result = calculateChange(owed, paid, config.denominations);
        expect(result).toEqual([
            { name: "quarter", count: 3 },
            { name: "dime", count: 1 },
            { name: "penny", count: 3 },
        ]);
    });

    test("returns no change when owed equals paid", () => {
        const owed = 500;
        const paid = 500;
        const result = calculateChange(owed, paid, config.denominations);
        expect(result).toEqual([]);
    });
});
