// Code your solutions in this file

function printBadges(employees) {
  for (let i= 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
    }
  
  return employees;
}

printBadges (['Ada', 'Brenda', 'Ali']);


  function tailsNeverFails() 
  {
    let tails = 0; 
    while (Math.random () >= 0.5)
    {tails++
  }
return ("You got "+ tails + " tails in a row!")
}
tailsNeverFails(3)