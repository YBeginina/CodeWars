function positiveSum(arr) {
    arr = arr.filter(i => i > 0);
    return arr.length == 0 ? 0 : arr.reduce((a,b) => a+b);
}

console.log(positiveSum([-1,2,4,-2,0,-5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-5]));
