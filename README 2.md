Cash Register

Creative Cash Draw Solutions wants a cashier tool that calculates change with a twist:

Normally, the program returns the minimum amount of physical change.

If the amount owed is divisible by 3, the program returns a randomized combination of denominations.

Project Structure
```cash-register/
├── src/
│   ├── calculator.js       # deterministic change logic
│   ├── formatter.js        # formats change into readable strings
│   ├── parser.js           # parses each line of input
│   ├── rules.js            # applies business rules (random vs normal flow)
│   ├── fileProcessor.js    # reads input.txt and writes output.txt
│   ├── index.js            # main entry point
│   └── config.js           # configurable values (denominations, divisor, etc.)
├── test/                   # Jest test files
├── input.txt               # input file with "owed,paid" values
├── output.txt              # generated output file with change results
├── package.json
└── README.md
```

Instrucctions
Running the Normal Flow

Install dependencies

npm install


Add input
Edit input.txt, each line in format:

owed,paid


Example:

2.12,3.00
1.97,2.00
3.33,5.00


Run the application

node src/index.js


Check results
Output is written to output.txt. Example:

3 quarters,1 dime,3 pennies
3 pennies
1 dollar,1 quarter,6 nickels,12 pennies

Running Tests

This project uses Jest for unit testing.

Run all tests:

npm test


Run tests with verbose output:

npm test -- --verbose

Configuration

You can adjust system behavior in src/config.js:

Random divisor (default 3):
Determines when random denominations should be used.

module.exports = {
  randomDivisor: 3,
  denominations: [
    { name: "dollar", value: 100 },
    { name: "quarter", value: 25 },
    { name: "dime", value: 10 },
    { name: "nickel", value: 5 },
    { name: "penny", value: 1 }
  ]
};


Denominations: Add, remove, or adjust for different countries.
Example for France (euros): replace dollars/quarters with euros/centimes.

Extensibility

Random rule is configurable (randomDivisor)

Currency system is configurable (denominations)
Easy to add new business rules in rules.js
Easy to internationalize (e.g., switch to Euro, Yen, etc.)

Example Usage
Input (input.txt)
2.12,3.00
1.97,2.00
3.33,5.00

Output (output.txt)
3 quarters,1 dime,3 pennies
3 pennies
1 dollar,1 quarter,6 nickels,12 pennies
