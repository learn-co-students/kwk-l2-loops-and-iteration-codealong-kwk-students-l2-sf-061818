// Code your solutions in this file

function printBadges(employeeNames) {
  for (var count = 0; count < employeeNames.length; count++) {
    console.log("Welcome " + employeeNames[count] + "! " + "You are employee #" + (count+1) + ".");
  }
  return employeeNames;
}

function tailsNeverFails() {
  var tails = 0;
  while (Math.random(0) >= 0.5) {
    tails++;
  }
  return "You got " + tails + " tails in a row!";
}