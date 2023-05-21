let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Its gliding!")
    }
  }
//   share between unrelated objects
  
  glideMixin(bird);
  glideMixin(boat);
  
  bird.glide();
  boat.glide();