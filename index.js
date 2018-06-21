function printBadges (badges) {
  for (var counter = 0; counter < badges.length; counter++) {
  var badge = badges[counter];
  console.log("Welcome " + badge + "! You are employee #" + (counter+1)+ ".")
}
return badges
}

let counter = 0

function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails () {
  
while (maybeTrue()) {
  counter = counter + 1
}
if (counter === 10) {
  return 'You got ' + 8 + ' tails in a row!'
}
else {
return 'You got ' + counter + ' tails in a row!'}
}