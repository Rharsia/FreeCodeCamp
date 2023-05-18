function rangeOfNumbers(startNum, endNum) {
    num = endNum - startNum;
  
    if (num < 0) {
      return [];
  
    } else {
  
      const countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
      return countArray;
  
    }
  };


console.log(rangeOfNumbers(5, 10));
console.log(rangeOfNumbers(1, 5));


function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }

console.log(rangeOfNumbers(5, 10));
console.log(rangeOfNumbers(1, 5));