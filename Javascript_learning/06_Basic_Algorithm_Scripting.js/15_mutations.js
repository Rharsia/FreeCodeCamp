function mutation(arr) {
    let newArr = [...arr];
    let answer;
  
    let firstStr = newArr[0].toLowerCase();
    let secondStr = newArr[1].toLowerCase();
  
    // console.log(secondStr);
  
    for (let i = 0; i < secondStr.length; i++) {
      // console.log(secondStr[i]);
      if (firstStr.includes(secondStr[i])) {
        // console.log("true");
      } else {
        return false
      }
    }
    
  
    return true;
  }
  
  console.log(mutation(["hello", "Hey"]));
  console.log(mutation(["hello", "Hello"]));
  
  