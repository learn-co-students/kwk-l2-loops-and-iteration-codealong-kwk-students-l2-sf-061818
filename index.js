function printBadges(name) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Welcome ${name[i]}! You are employee #${i + 1}.`)
  }
  return name;
}
printBadges.forEach(name)
  
  function tailsNeverFails()
  {
    let tails = 0;
    while (Math.random () >= 0.5)
    {tails++
  }
return ("You got "+ tails + " tails in a row!")
}
tailsNeverFails(3)