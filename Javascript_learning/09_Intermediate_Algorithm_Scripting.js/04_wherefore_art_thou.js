function whatIsInAName(collection, source) {
    // console.log(collection);
    // console.log(source);
  
    let sourceKeys = Object.keys(source);
    console.log(sourceKeys);
  
    let answer = collection.filter(obj => {
      for (let i = 0; i < sourceKeys.length; i++) {
        if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
          return false;
        }
      }
      return true;
    });
  
    return answer;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });