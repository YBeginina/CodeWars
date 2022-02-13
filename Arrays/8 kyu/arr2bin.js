function arr2bin(arr){
    let filteredArr = arr.filter(i => typeof i === 'number');
    return filteredArr.length === 0 ? '0' : filteredArr.reduce((a, b) => (a + b)).toString(2);
}

console.log(arr2bin([1,2,3,4,5]));
console.log(arr2bin([[],1,true,null,7]));
console.log(arr2bin([true,true,false,15]));
console.log(arr2bin([null, 1]));
console.log(arr2bin([true,true]));
