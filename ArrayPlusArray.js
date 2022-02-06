function arrayPlusArray(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
  }

  console.log(arrayPlusArray([1,5,9],[6,8,7]));
