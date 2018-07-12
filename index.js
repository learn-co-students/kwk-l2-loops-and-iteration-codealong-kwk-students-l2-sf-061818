// Code your solutions in this file
function printBadges(value) {
  for (let i = 0; i < value.length; i++) {
    value[i] = `Welcome ${value[i]}! You are employee #${i + 1}.`;
    console.log(value[i])
  }
  return value
}

function tailsNeverFails() {
  let x = true
  let t = 0
  let f = 0
  while (x) {
    t = Math.random()
    if (t < 0.5) {
      x = false
    }
    else {
      f = f + 1
    }
  }
  return `You got ${f} tails in a row!`
}