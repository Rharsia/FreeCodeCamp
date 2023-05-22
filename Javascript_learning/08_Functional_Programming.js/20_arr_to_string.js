function sentensify(str) {
    // Only change code below this line
    let strArr = str.split(/\W/);
    console.log(strArr);
  
    let answer = strArr.join(" ");
    console.log(answer);
  
    return answer;
  
    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");