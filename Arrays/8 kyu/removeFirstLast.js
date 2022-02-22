function array(arr){
    let newArr = arr.split(',');
    if (newArr.length<3){
        return null;
    }
    else {
        newArr.pop();
        newArr.shift();
        return newArr.join(' ');
    }
}

console.log(array('1,2,3,4'));
