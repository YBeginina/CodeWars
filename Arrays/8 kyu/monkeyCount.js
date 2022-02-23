function monkeyCount(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i+1);
    }
    return arr;
}

console.log(monkeyCount(8));
