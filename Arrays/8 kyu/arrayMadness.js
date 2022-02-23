function arrayMadness(a, b) {
    someMagicA = a.reduce((i, j) => i + j**2, 0);
    someMagicB = b.reduce((i, j) => i + j**3, 0);
    return someMagicA > someMagicB;
  }

console.log(arrayMadness([4,5,6],[1,2,3]));
console.log(arrayMadness([5,3,2,4,1],[15]));

