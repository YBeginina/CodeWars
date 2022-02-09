function solution(str){
  let reverse = '';
  for (let index = str.length; index > 0; index--) {
      reverse += str[index-1];
  }
  return reverse;
}

console.log(solution('123456'));
