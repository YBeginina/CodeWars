function strangeMath(n, k){
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i+1);
    }
    arr.sort();
    console.log(arr);
    return arr.indexOf(k)+1;
}

console.log(strangeMath(15, 15));
