// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let numOfAttendees = Number(prompt('Enter the number of attendees'))
  let attendeeList = ''
  
  while (count < numOfAttendees) {
    let attendee = prompt('Enter attendee name')
    attendeeList = attendeeList + attendee + ', '
    count = count + 1
  }
  
  alert(attendeeList) 
}

function make2() {
  let count = 0
  let numOfNumbers = Number(prompt('Enter amount of numbers you want to add together'))
  let sum = 0
  
  while (count < numOfNumbers) {
    let digit = Number(prompt('Enter a number')) 
    sum +=digit
    count = count + 1
  }
  
  alert('The sum of the number is ' + sum)
  
}