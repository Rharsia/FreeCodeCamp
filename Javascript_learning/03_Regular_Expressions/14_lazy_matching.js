let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

console.log(result);

// ? finds the shortest possible string
// instead of <h1>Winter is coming</h1>