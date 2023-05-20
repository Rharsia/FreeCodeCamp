function frankenSplice(arr1, arr2, n) {

    let arr2Copy = [...arr2];
    let arr1Copy = [...arr1];
  
    arr2Copy.splice(n, 0, ...arr1Copy);
  
    // console.log(arr2);
    // console.log(arr1);
    // console.log(arr2Copy);
  
    return arr2Copy;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);