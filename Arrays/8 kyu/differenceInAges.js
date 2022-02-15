function differenceInAges(ages){
let max = Math.max(...ages);
let min = Math.min(...ages);
let diff = max-min;
    return [min, max, diff];
}

console.log(differenceInAges([3,65,4,8]));
