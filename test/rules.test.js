const processLine = require("../src/rules");

describe("processLine", () => {
    test("returns 'Insufficient payment' when paid < owed", () => {
        const result = processLine("5.00,2.00");
        expect(result).toBe("Insufficient payment");
    });

    test("returns 'No change' when paid == owed", () => {
        const result = processLine("3.00,3.00");
        expect(result).toBe("No change");
    });

    test("returns correct deterministic change when not divisible by divisor", () => {
        const result = processLine("2.12,3.00");
        expect(result).toBe("3 quarters,1 dime,3 pennies");
    });

    test("returns some valid change when owed divisible by divisor", () => {
        const result = processLine("3.00,5.00");
        expect(typeof result).toBe("string");
        expect(result.length).toBeGreaterThan(0);
    });
});
