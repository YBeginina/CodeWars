function addLength(str) {
    return str.split(' ').map(i => i + ` ${i.length}`);
}

console.log(addLength('you will win'));
