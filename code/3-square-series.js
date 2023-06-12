// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  // write your code here
  let maxSquare = prompt('What number do you want the Square Series for?')
  let count = 1 
  let series = ''

  while(count <= maxSquare) {
    series = series + count * count + ','
    count = count + 1
  }
  alert('Series for ' + maxSquare + ' is: ' + series)
}
