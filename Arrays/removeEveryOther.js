/* function removeEveryOther(arr){
let newArr = [arr[0]];

for (let i = 1, l = arr.length; i < l; i++) {
        if (i % 2 == 0){
            newArr.push(arr[i]);
        }
    }
return newArr;
} */

function removeEveryOther(arr){
    return arr.filter((item,index) => index % 2 === 0);
}


  console.log(removeEveryOther([1,2,3,4,5,6]));

