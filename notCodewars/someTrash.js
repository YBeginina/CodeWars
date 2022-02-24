'use strict';

//console.log(typeof NaN);


const data = [[1,2,3],[3,4,5],[5,6,7]];

const flat = data.reduce((p, i) => p.concat(i), []);
console.log(flat);


function sumOfNumInStr(a){
    let arr = a.split('');
    return arr.map(i => +i).reduce((p, i) => p + i);
}

console.log(sumOfNumInStr('12345'));

console.log([true,  true,  null,  false,
    true,  true,  undefined,  true].filter(Boolean));
