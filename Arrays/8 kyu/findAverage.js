let findAverage = function (nums) {
return nums.reduce((p, i) => p + i) / nums.length;
}

console.log(findAverage([1, 3, 5, 7]));
