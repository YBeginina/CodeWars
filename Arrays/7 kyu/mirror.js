function mirror(data) {
    let sortedArr = [].concat(data).sort((a, b) => a-b);
    let mirrorArr = [].concat(sortedArr).reverse();
    mirrorArr.shift();
    return sortedArr.concat(mirrorArr);
}

console.log(mirror([-8, 42, 18, 0, -16]));
