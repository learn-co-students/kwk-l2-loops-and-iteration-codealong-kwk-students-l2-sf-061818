// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali'];
function printBadges(names) {
  for (var counter = 0; counter < names.length; counter++) {
    console.log("Welcome " + names[counter] + "! You are employee #"  + (counter + 1) + ".");
  }
  return names
}
console.log(printBadges(names))

function tailsNeverFails() {
  var counter = 0
  while (Math.random() <= .5 ) {
    counter = counter+1
  }
  return "You got " + counter + " tails in a row!"
}
console.log(tailsNeverFails())