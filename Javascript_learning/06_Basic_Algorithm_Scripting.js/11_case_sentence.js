function titleCase(str) {

    let words = str.split(" ");
    // console.log(words);
  
    let answer = "";
  
    for (let i = 0; i < words.length; i++) {
      // console.log(words[i]);
  
      let currentWord = words[i];
      let firstLetter = currentWord[0];
      let restOfWord = currentWord.slice(1, currentWord.length);
  
      firstLetter = firstLetter.toUpperCase();
      restOfWord = restOfWord.toLowerCase();
  
      // console.log(firstLetter);
      // console.log(restOfWord);
  
      let finalWord = firstLetter + restOfWord;
      // console.log(finalWord);
  
      answer += finalWord + " ";
    }
  
    answer = answer.substring(0, answer.length - 1);
  
    return answer;
  }
  
  console.log(titleCase("I'm a little tea pot"));
  
  // console.log("I'm a little tea pot".length)
  // console.log(titleCase("I'm a little tea pot").length)