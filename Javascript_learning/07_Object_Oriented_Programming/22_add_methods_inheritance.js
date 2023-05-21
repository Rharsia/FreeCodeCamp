function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
// dog inherited the eat() function from Animal

Dog.prototype.bark = function() {
  console.log("Woof!")
}
// add a bark() function to Dog

// Only change code above this line

let beagle = new Dog();

beagle.eat();
beagle.bark();