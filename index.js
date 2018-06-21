// Code your solutions in this file
const employeeNames = ['Ada', 'Brenda', 'Ali'];
function printBadges(x)
{
  for(let i = 0; i < x.length; i++)
  {
      console.log(`Welcome ${x[i]}! You are employee #${i+1}.`)
  }
  return x 
}
printBadges()

function tailsNeverFails()
{
  let tails = 0;
  while(Math.random () >= 0.5)
  {
    tails ++ 
  }
  return ("You got ${tails} tails in a row!")
}
tailsNeverFails(10)
