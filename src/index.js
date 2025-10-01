const processFile = require("./fileProcessor");

const inputFile = "input.txt";
const outputFile = "output.txt";

processFile(inputFile, outputFile);
console.log("✅ Processing complete. Check output.txt");
