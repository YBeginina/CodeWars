const solution = mtrx => {
let posTarget = [];
let posArrow = [];

    for (let i = 0, l = mtrx.length; i < l; i++) {
        if (mtrx[i].indexOf('x') === -1) {
            continue;
        }
        else {
            posTarget = [i, mtrx[i].indexOf('x')];
        }
        if (mtrx[i].indexOf('>') === -1) {
            continue;
        }
        else {
            posArrow = [i, mtrx[i].indexOf('>')];
        }
    }

    return (posTarget[0]===posArrow[0] && posTarget[1]>posArrow[1]);
}

console.log(solution([
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'x'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '>', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ']
  ]));
