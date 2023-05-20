function findLongestWordLength(str) {

    let longestWord = 0;
  
    let strArr = str.split(" ");
  
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].length > longestWord) {
        longestWord = strArr[i].length;
      }
    }
    
    return longestWord;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));