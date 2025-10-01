// src/formatter.js
function formatChange(change) {
    return change
        .map(c => {
            let name = c.name;
            if (c.count > 1) {
                if (name === "penny") {
                    name = "pennies"; // irregular plural
                } else {
                    name += "s";
                }
            }
            return `${c.count} ${name}`;
        })
        .join(",");
}

module.exports = { formatChange };  // ✅ must export as object
