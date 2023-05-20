function getIndexToIns(arr, num) {
    let position = 0;
  
    let newArr = [...arr];
    newArr.sort((a,b) => a - b)
  
    for (let i = 0; i < newArr.length; i++) {
      // console.log(arr[i]);
  
      if (num <= newArr[i]) {
        return i;
      }
    }
  
    return newArr.length;
  }
  
  console.log(getIndexToIns([40, 60], 50));
  console.log(getIndexToIns([5, 3, 20, 3], 5));
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));