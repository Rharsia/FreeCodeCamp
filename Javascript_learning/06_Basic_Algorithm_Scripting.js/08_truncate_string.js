function truncateString(str, num) {

    let answer = "";
  
    let strKept = str.slice(0, num);
  
    if (num < str.length) {
      answer += strKept + "...";
    } else {
      answer += strKept;
    }
  
    return answer;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));