function calculateRandomChange(owed, paid, denominations) {
    let change = [];
    let remaining = paid - owed;

    while (remaining > 0) {
        const possible = denominations.filter(d => d.value <= remaining);
        const denom = possible[Math.floor(Math.random() * possible.length)];
        remaining -= denom.value;

        const existing = change.find(c => c.name === denom.name);
        if (existing) {
            existing.count++;
        } else {
            change.push({ name: denom.name, count: 1 });
        }
    }

    return change;
}

module.exports = calculateRandomChange;