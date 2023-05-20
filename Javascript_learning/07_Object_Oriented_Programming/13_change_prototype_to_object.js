function Dog(name) {
    this.name = name;
  }
  
Dog.prototype = {
// Only change code below this line
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name)
    },
    numLegs: 4
    };

// its better to add all prototype properties 
// to a prototype object