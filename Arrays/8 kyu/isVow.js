function isVow(a){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let codes = [97, 101, 105, 111, 117];

    return a.map(function(itemA){
        return (codes.indexOf(itemA) !== -1) ? vowels[codes.indexOf(itemA)] : itemA;
    });
}

console.log(isVow([118,117,120,101,117,98,122,97,120,106,104,116,105,114,113,120,111]));
