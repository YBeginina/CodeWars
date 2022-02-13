function first(arr, n = 1) {
    return arr.slice(0, n);
}

console.log(first([1,2,3,4,5,6], 3));
console.log(first([1,2,3,4,5,6]));
console.log(first([1,2,3,4,5,6], 0));
