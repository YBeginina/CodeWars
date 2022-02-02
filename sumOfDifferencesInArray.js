//сходу в лоб
function sumOfDifferences0(arr) {
arr.sort(function(a,b) {
    return b-a;
})
let sum = 0;
for (let i = 0; i < arr.length-1; i++) {
    sum += arr[i]-arr[i+1];
}
return sum;
}

console.log(sumOfDifferences0([2, 1, 10]));
console.log(sumOfDifferences0([-3, -2, -1]));

//математически упростив
function sumOfDifferences1(arr) {
if(arr.length<1)
return 0;
else return Math.max(...arr) - Math.min(...arr);
}

console.log(sumOfDifferences1([2, 1, 10]));
console.log(sumOfDifferences1([-3, -2, -1]));

//лаконичнее с тернарным оператором
function sumOfDifferences1(arr) {
    return arr.length<1 ? 0 : Math.max(...arr) - Math.min(...arr);
    }

    console.log(sumOfDifferences1([2, 1, 10]));
    console.log(sumOfDifferences1([-3, -2, -1]));
