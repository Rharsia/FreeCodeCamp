// 1	        "Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	    "Birdie"
// par	        "Par"
// par + 1	    "Bogey"
// par + 2	    "Double Bogey"
// >= par + 3	"Go Home!"

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  let answer;

  if (strokes == 1) {
    answer = names[0];
  } else if (strokes <= par - 2) {
    answer = names[1];
  } else if (strokes == par - 1) {
    answer = names[2];
  } else if (strokes == par) {
    answer = names[3];
  } else if (strokes == par + 1) {
    answer = names[4];
  } else if (strokes == par + 2) {
    answer = names[5];
  } else {
    answer = names[6];
  }

  return answer;
  // Only change code above this line
}

golfScore(5, 4);