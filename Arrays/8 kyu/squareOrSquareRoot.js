function squareOrSquareRoot(array) {
    return array.map(function(item){
        if(Number.isInteger(Math.sqrt(item))){
            return Math.sqrt(item);
        }
        else {
            return Math.pow(item, 2);
        }
    });
  }

  console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ]));
