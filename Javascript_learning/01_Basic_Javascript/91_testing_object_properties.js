function checkObj(obj, checkProp) {
    // Only change code below this line
    let answer;
    
    if (obj.hasOwnProperty(checkProp)) {
      answer = obj[checkProp];
    } else {
      answer = "Not Found";
    }
  
    return answer
    // Only change code above this line
  }


