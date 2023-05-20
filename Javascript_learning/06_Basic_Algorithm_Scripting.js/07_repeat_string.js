function repeatStringNumTimes(str, num) {
    let answer = "";
  
    if (num > 0) {
      for (let i = num; i > 0; i--) {
        answer += str;
      }
    }
  
    return answer;
  }
  
  console.log(repeatStringNumTimes("abc", 3));