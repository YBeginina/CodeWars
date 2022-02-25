function sumOfMinimums(arr) {
    return arr.reduce((p, i) => p + Math.min(...i), 0);
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));
