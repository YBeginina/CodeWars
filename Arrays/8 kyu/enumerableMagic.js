function all1( arr, fun ){
    let oldLength = arr.length;
    let newLength = arr.filter(i => fun(i)).length;
    return oldLength == newLength;
}


function all( arr, fun ){
    return arr.every(fun);
}

console.log(all([1,2,3,4,5], function(v){return v<9}));
