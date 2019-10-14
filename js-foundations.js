// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
  if (num % 3 === 0) {
    return num + " is divisible by three"
  } else {
    return num + " is not divisble by three"
  }
}
console.log(evenlyDistrubed(15))
console.log(evenlyDistrubed(3))
console.log(evenlyDistrubed(385))
console.log(evenlyDistrubed(-7))


// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

var helloMe = {firstName:"Stephen", lastName:"Bilham", height:"5'9", eyeColor: "brown"}
console.log("Hello my name is " +helloMe.firstName + " " + helloMe.lastName + ". I am " + helloMe.height + " and the color of my eyes are " + helloMe.eyeColor + ".")


// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

function returnEveryOther(array) {
  let newArr = []
  for (var i = 0; i < array.length; i++ ) {
    if (i % 2 === 0) {
         newArr.push(array[i])
    }
  }
  return newArr.join()
}
console.log(returnEveryOther(randomNouns))


// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

makeCapital = (array) => {
  let newArr = []
  for (i = 0; i < array.length; i++) {
    let str = array[i]
    let firstLetter = str.charAt(0).toUpperCase()
    let rest = str.slice(1)
    var newStr = firstLetter + rest
    newArr.push(newStr)

  }
  return newArr
}

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

wordLength = (array) => {
  let newArr = []
  for (i = 0; i < array.length; i++) {
    var length1 = array[i].length
     newArr.push(length1)
  }
  return newArr
}
console.log(wordLength(randomNouns))


// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

 function sortString(str){
  var arr = str.split('');
  var sorted = arr.sort();
  return sorted.join('');
}
console.log(sortString(testString1))


// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

 function sortString(str1,str2,str3){
  let newStr = str1 + str2 + str3
  var arr = newStr.split('');
  var sorted = arr.sort();
  return sorted.join('');
}

  console.log(sortString(testString1,testString2,testString3))

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

numberOfAnimals = (arr1, arr2) => {
   let newStrang = ""
      for (i = 0; i < arr1.length; i++) {
     let newStr1 = arr1[i]
     let newStr2 = arr2[i]
     let strang = newStr1 + " " + newStr2
       newStrang =  newStrang + " " + strang
   }
   return newStrang
 }
 console.log(numberOfAnimals(amounts, animals))

// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

