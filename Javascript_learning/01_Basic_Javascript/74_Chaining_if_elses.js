function testSize(num) {
    // Only change code below this line
    let answer;
  
    if (num < 5) {
      answer = "Tiny";
    } else if (num < 10) {
      answer = "Small";
    } else if (num < 15) {
      answer = "Medium";
    } else if (num < 20) {
      answer = "Large";
    } else {
      answer = "Huge";
    }
  
    return answer;
    // Only change code above this line
  }
  
  testSize(7);