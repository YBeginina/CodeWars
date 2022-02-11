function well(x){
    countOfGood = 0;
    for (let i = 0, l = x.length; i < l; i++){
        if (x[i] === 'good'){
            countOfGood++;
        }
    }
    switch(countOfGood){
        case 0:
            return 'Fail!';
        case 1:
        case 2:
            return 'Publish!';
        default:                //case 3+
            return 'I smell a series!';
    }
}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
