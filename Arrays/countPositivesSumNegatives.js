function countPositivesSumNegatives(input) {
    let countPositives = 0;
    let sumNegatives = 0;

    if (input === null || input.length === 0){
        return [];
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i]<=0){
            sumNegatives += input[i];
        }
        else {
            countPositives += 1;
        }
    }
    return [countPositives, sumNegatives];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));
console.log(countPositivesSumNegatives([0, 0]));
