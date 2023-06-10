// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = prompt('Give me a number to count down from')
 
  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }
   
  alert('Lift Off!')
}

function make1() {
  // copy and paste your code here when you get to the Make step
  let count = 0
  let Maxnumber = prompt('Give me a maximum number to count to')
  let increase = prompt('Give me a an increment')
  count = Number(count)
  increase = Number(increase)

  while (count<Maxnumber) {
    alert(count + '...')
    count = count+increase  
  }
   
  alert('Lift Off!')
}