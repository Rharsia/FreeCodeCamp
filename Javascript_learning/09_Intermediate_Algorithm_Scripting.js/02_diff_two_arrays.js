function diffArray(arr1, arr2) {
    let differences1 = arr1.filter((element) => !arr2.includes(element));
    console.log(differences1);
  
    let differences2 = arr2.filter((element) => !arr1.includes(element));
    console.log(differences2);
  
    let newArr = [...differences1, ...differences2];
    console.log(newArr);
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);