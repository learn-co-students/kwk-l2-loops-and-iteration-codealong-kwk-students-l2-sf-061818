// Code your solutions in this file
let employees = ["joe", "gabe"];
function printBadges(employees){
  for(let i = 0; i < employees.length;i++){
  let name = employees[i]
  console.log("Welcome " + name + "! You are employee #" + (i+1) + ".")
  }
  return employees
}
function tailsNeverFails(){
  let tails = 0
  while(Math.random()<0.5){
    tails++
  }
  return ("You got " + tails + " tails in a row.")
}