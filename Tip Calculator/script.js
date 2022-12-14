/* 
🌟 APP: Tip Calculator

functions to use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

All the DIV ID's to be used 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

//  global access to all inputs / divs here 
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// calculate the total bill per person
const calculateBill = () => {
   // get bill from user input & convert it into a number
    const bill = Number(billInput.value)
    

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercentage = Number(tipInput.value)/100
  console.log(tipPercentage)

  // get the total tip amount
    const TipAmount = (bill * tipPercentage)
    console.log(TipAmount) 

  // calculate the total (tip amount + bill)
  const total = (TipAmount + bill)

  // calculate the per person total (total divided by number of people)
    const perPersonTotal = (total/numberOfPeople)

  // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = '$'+ perPersonTotal.toFixed(2)
}

// split the bill between more people
const increasePeople = () => {
   // increment the amount of people
    numberOfPeople +=1

  // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// split the bill between few people
const decreasePeople = () => {
  // if amount is 1 or less simply return
   if (numberOfPeople <=1) {
    return
   }
  // decrement the amount of people
    numberOfPeople -=1

  // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}
