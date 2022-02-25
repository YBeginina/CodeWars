function doubleton(num){
    let newNum = num;
    do {
        newNum++;
    } while(new Set(newNum.toString().split('')).size !==2);
    return newNum;
}

console.log(doubleton(10));
