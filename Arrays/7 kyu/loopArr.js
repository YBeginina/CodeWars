function loopArr(arr, direction, steps) {
    for (let i = 0; i < steps; i++) {
        if (direction === 'left'){
            arr.push(arr.shift());
        }
        else if (direction === 'right'){
            arr.unshift(arr.pop());
        }
    }
    return arr;
}


console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2));
