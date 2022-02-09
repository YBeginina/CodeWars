'use strict';

function lastSurvivor(letters, coords) {
    letters = letters.split('');
    while (coords.length > 0){
        letters.splice(coords.shift(),1);
    }
    return letters.join('');
}

let letters = 'kbc';
let coords = [0, 1];

console.log(lastSurvivor(letters, coords));


