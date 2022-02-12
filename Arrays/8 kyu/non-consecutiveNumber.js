function firstNonConsecutive (arr) {
for (let i = 0; i < arr.length; i++) {
    if (arr[i+1]-arr[i]==2){
        return arr[i+1];
        }
    }
    return null;
}

console.log(firstNonConsecutive([1,2,3,4]));
console.log(firstNonConsecutive([1]));
console.log(firstNonConsecutive([]));
console.log(firstNonConsecutive([1,2,4,5]));
