function mergeArrays(arr1, arr2) {
arr1 = arr1.concat(arr2).sort((a,b) => a-b);
let newArr = Array.from(new Set(arr1));
return newArr;
}



console.log(mergeArrays([1,2,5,9], [6,4,2,1,0]));
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));
