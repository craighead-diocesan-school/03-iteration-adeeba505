// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  // write your code here
  let factorial = prompt('Gimme the number to the factorial')
  let count = factorial
  let total = 1

  while (count > 1) {
    total = total * count
    count = count - 1
  }
  alert('The factorial of ' + factorial +' is ' + total)
}
