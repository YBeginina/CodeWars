function solution(str){
  let indexMax = str.length;
  let reverse = '';
  for (let index = indexMax; index > 0; index--) {
      reverse += str[index-1];
  }
  return reverse;
}

console.log(solution('123456'));
