function fakeBin(x){
    return x.split('').map(item => item<=4 ? 0 : 1).join('');
}

console.log(fakeBin('45385593107843568'));
