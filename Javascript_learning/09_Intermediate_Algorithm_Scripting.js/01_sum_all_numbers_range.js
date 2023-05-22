function sumAll(arr) {
    let sum = 0;
  
    let min = Math.min(...arr);
    let max = Math.max(...arr);
  
    for (let i = 0; i < max-min+1; i++) {
      sum += min + i;
    }
  
    return sum
  }
  
  sumAll([1, 4]);