function randomRange(myMin, myMax) {
    result = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    return result;
  }


console.log(randomRange(15, 20));