function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");

console.log(beagle.numLegs);
// all instances will have correct 
// num of legs without copying the variable