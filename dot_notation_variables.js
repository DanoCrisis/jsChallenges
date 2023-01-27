// console.log("Hello World") // prints to console
// console.log()
// console.log("Hello World".length) // gives the number of characters in a string
// console.log()
// console.log("Hello, what is your name?".length) // gives the number of characters in a string
// console.log()
// console.log("Hello World".toLowerCase()) // gives the string in lower case
// console.log()
// console.log("Hello World".at(3)) // gives the character at index 3
// console.log()
// console.log("     Hello World       ".trim())   // gets rid of the spaces on either side of the string
// console.log()
// console.log("Hello".concat(' ', "World"));  // connects the two strings together with whatever spacing is placed in the 1st argument
// console.log()
// console.log("The cake is a lie! ".repeat(10))  // repeats the string a number (10) of times
// console.log()
// console.log("Hello World".startsWith("H"))   // Checks if the string starts with ("H") if so gives true
// console.log()
// console.log("Hello World".endsWith("H"))    // Checks if the string ends with ("H") if not gives false
// console.log()
// console.log("Hello World".includes("H"))    // Checks if the string includes ("H") if so gives true
// console.log()
// console.log("Hello World".indexOf("W"))    // gives the index of ("W") in the string
// console.log()
// console.log("Hello World".replace("World", "Everyone"))    // replace the first argument with the 2nd in a string
// console.log()
// console.log("Hello World".slice(3, 6))    // Takes out a slice of the string between the first index and the 2nd index (with the 2nd being non inclusive)
// console.log()
// console.log("Hello World".split(""))    // Splits the string into individual characters (puts them in an array?)
// console.log()
// let jelly = "Hello World".split("")
// console.log()
// console.log(jelly)

// let thing = 5
// console.log(thing.isInteger()) // ????????

// let firstName = "John"
// let age = 26
// let universityStudent = true

// console.log(firstName)
// console.log(age)
// console.log(universityStudent)

// const firstName = "John"     // as these variables have been set as constant they cannot be changed
// const age = 26
// const universityStudent = true

// firstName = "John"
// age = 26
// universityStudent = true

// console.log(firstName)
// console.log(age)
// console.log(universityStudent)

// let modelOfCar = "Volvo"

// console.log("I drive a " + modelOfCar)
// console.log()
// console.log("Hi, my name is " + firstName + " I am " + age + " years old.")
// console.log()
// console.log(`Hi, my name is ${firstName} I am ${age} years old. `)  // Template literals can be used to form a sentance with variables easier.
// console.log()
// console.log(`Hi, my name is ${firstName} I am ${age} years old, and I drive a ${modelOfCar}. `) // they use ` {variable}  `


// ------------------------------------------- Activities -----------------------------------------------------------------




// ------------------ Activity 2 -------------

let firstName = "Daniel"
let age = 36
let favouriteColour = "blue"

console.log(`Hi, my name is ${firstName}, I am ${age} years old, and my favourite colour is ${favouriteColour}. `)
console.log()

// ------------------ Activity 3 -------------

let day = "Monday"
let breakfast = "Toast"
let lunch = "Soup"
let dinner = "Fish & Chips"

console.log(`On ${day}: I ate ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner. `)
console.log()

day = "Tuesday"
breakfast = "Cereal"
lunch = "Salad"
dinner = "Curry"

console.log(`On ${day}: I ate ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner. `)
console.log()

// ------------------ Activity 4 -------------

const todaysDate = new Date()      // finds out what todays date is
let birthdate = new Date("06/16/1986")    // sets variable birthdate to be my birthday in the format (mm/dd/yyyy)
let nextBirthday = new Date("06/16/2023")   // sets variable nextBirthdate to be my next birthday in the format (mm/dd/yyyy)
let daysUntilNextBirthday = (nextBirthday - todaysDate) / (1000 * 60 * 60 * 24)   // calculates the difference in milli seconds between the 2 days, and then converts this to days
let daysIHaveBeenALive = (todaysDate - birthdate) / (1000 * 60 * 60 * 24)

// console.log(todaysDate)
// console.log(birthdate)
// console.log(nextBirthday)

let x =Math.floor(daysUntilNextBirthday)    // Changes the variable into a whole number of days
console.log()
console.log(`There are ${x} days until my birthday, how exciting!`)
console.log()
let y =Math.floor(daysIHaveBeenALive)     // Changes the variable into a whole number of days
console.log(`There have been ${y} days since my birth, gosh I'm old!`)
console.log()


