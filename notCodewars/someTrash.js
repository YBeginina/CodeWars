'use strict';

//console.log(typeof NaN);


const data = [[1,2,3],[3,4,5],[5,6,7]];

const flat = data.reduce((p, i) => p.concat(i), []);
console.log(flat);
