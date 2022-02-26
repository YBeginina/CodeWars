'use strict';


let count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count--;
    break;
}

  return count > 0 ? console.log(count + ' Bet') : console.log(count + ' Hold');
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
//console.log(typeof NaN);

function sum(a, b){
  console.log(a+b);
}

sum(1,10);
sum(15, 95);
sum(54,52);
