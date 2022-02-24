// Sum Numbers
function sum (numbers) {
    "use strict";
    return numbers.reduce((p, i) => p + i, 0);
};

console.log(sum([]));
