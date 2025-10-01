function calculateChange(owed, paid, denominations) {
    let change = [];
    let remaining = paid - owed;

    for (const denom of denominations) {
        if (remaining >= denom.value) {
            const count = Math.floor(remaining / denom.value);
            remaining -= count * denom.value;
            change.push({ name: denom.name, count });
        }
    }

    return change;
}

module.exports = calculateChange;
