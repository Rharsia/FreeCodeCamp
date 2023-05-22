// Only change code below this line
function urlSlug(title) {
    let lowerStr = title.toLowerCase();
    console.log(lowerStr);
  
    // let trimmedStr = lowerStr.trim();
    // console.log(trimmedStr);
  
    let strArr = lowerStr.split(/\W/);
    // console.log(strArr);
  
    let filteredArr = strArr.filter((element) => element !== "");
    console.log(filteredArr);
  
  
    let answer = filteredArr.join("-");
    console.log(answer);
  
    return answer;
  
  }
  // Only change code above this line
  // urlSlug(" A Mind Needs Books Like A Sword Needs A Whetstone");
  urlSlug(" Winter Is  Coming");