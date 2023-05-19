let myString = "Eleanor Roosevelt";
let myRegex = /^(Eleanor|Franklin)\s\w*\W*\s*Roosevelt$/; // Change this line
let result = myRegex.test(myString); // Change this line

console.log(result);
// After passing the challenge experiment with myString and see how the grouping works