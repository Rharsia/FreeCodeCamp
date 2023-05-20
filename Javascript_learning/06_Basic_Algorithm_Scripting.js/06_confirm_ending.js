function confirmEnding(str, target) {
    let result;
  
    let charNum = target.length;
  
    let lastChar = str.substr(-charNum);
   
    if (lastChar === target) {
      result = true;
    } else {
      result = false;
    }
  
    return result;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Congratulation", "on"));