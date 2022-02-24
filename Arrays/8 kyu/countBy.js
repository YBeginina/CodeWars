function countBy(x, n) {
    let z = [];
  for (let i = 0; i < n; i++) {
      z.push((i+1)*x);
    }
    return z;
  }
console.log(countBy(2,10));
