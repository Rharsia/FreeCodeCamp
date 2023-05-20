function bouncer(arr) {

    let newArr = [...arr];
    let answerArr = [];
  
    answerArr = newArr.filter((element) => !!element);
  
    return answerArr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
  console.log(bouncer([false, null, 0, NaN, undefined, ""]))