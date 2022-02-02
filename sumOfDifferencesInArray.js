function sumOfDifferences(arr) {
arr.sort(function(a,b) {
    return b-a;
})
let sum = 0;
for (let i = 0; i < arr.length-1; i++) {
    sum += arr[i]-arr[i+1];
}
return sum;
}

console.log(sumOfDifferences([2, 1, 10]));
console.log(sumOfDifferences([-3, -2, -1]));
