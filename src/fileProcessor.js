const fs = require("fs");
const processLine = require("./rules");

function processFile(inputFile, outputFile) {
    const lines = fs.readFileSync(inputFile, "utf-8").trim().split("\n");
    const results = lines.map(line => processLine(line.trim()));
    fs.writeFileSync(outputFile, results.join("\n"), "utf-8");
}

module.exports = processFile;
