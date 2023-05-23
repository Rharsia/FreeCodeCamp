function destroyer(arr) {
    let valsToRemove = Object.values(arguments).slice(1);
    let filteredArray = [];
  
    // console.log(valsToRemove)
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
  
      if (removeElement === false) {
        filteredArray.push(arr[i]);
      }
    }
  
    // console.log(filteredArray)
  
    return filteredArray;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);