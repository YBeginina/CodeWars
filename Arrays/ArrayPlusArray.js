function arrayPlusArray1(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
  }

  function arrayPlusArray(arr1, arr2) {
    return sumElementsOfArr(arr1)+sumElementsOfArr(arr2);
  }

  function sumElementsOfArr(arr){
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
          sum +=arr[i];
      }
      return sum;
  }
  console.log(arrayPlusArray([1,2,3],[4,5,6]));
