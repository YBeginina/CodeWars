function getAverage(marks){
    let sumArr = marks.reduce((prev, item) => prev + item);
    return parseInt( sumArr / marks.length);
}

console.log(getAverage([1,1,1,2,2]));
