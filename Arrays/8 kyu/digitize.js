function digitize(n) {
    return String(n).split('').reverse().map(i => +i);
}

console.log(digitize(654321));
