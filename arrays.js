// let favHolidayDestinations = [
//     "Venice, Italy",
//     "Paris, France",
//     "Barcelona, Spain"
// ]

// console.log(favHolidayDestinations)

// favHolidayDestinations[1] = "Florida, USA"

// console.log(favHolidayDestinations)

// console.log(favHolidayDestinations.length)

// console.log(favHolidayDestinations.pop())

// console.log(favHolidayDestinations)











// // --------------------------------------------- Activities -----------------------------------------------------------------

// -------------------------- Activity 1 -------------------------

let favFilms = [
    "Matrix",
    "Terminator",
    "Die Hard"
]

console.log(favFilms)


// -------------------------- Activity 2 -------------------------

console.log(favFilms[1])

// -------------------------- Activity 3 -------------------------

favFilms[1] = "Inception"
console.log(favFilms)

// -------------------------- Activity 4 -------------------------

let numbers = [5, 2, 1, 4, 6]
console.log(numbers)

let multiplied = numbers.map(x => x*10)     // map a new function onto each item in the array
console.log(multiplied)

numbers.shift()    // Removes the 0 index item in the array and "shifts" the others along
console.log(numbers)

console.log(numbers.slice(2, 4))  // displays only the range of indecies specified
// or
let sliceNumbers = numbers.slice(2,4) // creates a new array with just the range of indecies specified
console.log(sliceNumbers)

numbers.splice(0, 0, 5) // adds a new item at the index of the first argument, the second argument is add (0) or replace (1), the 3rd argument is what you are adding
console.log(numbers)
numbers.splice(2, 1, 7) // with the 2nd argument now a "1" the item at index "2" is now replaced with a "7"
console.log(numbers)


numbers.unshift(5) // inserts the given values at the beggining of the array and "shifts" the other items along
console.log(numbers)

// -------------------------- Activity 5 -------------------------

let favSongs = [
"Greenday - Time of your life",
"Placebo - Bruise Pristine",
"REM - Orange Crush"
]

console.log(favSongs)

favSongs.splice(3,0,"Divine Comedy - Gin Soaked Boy")
favSongs.splice(4,0,"Sparks - This Town Ain't Big ENough For The Both Of Us! ")

console.log(favSongs)

favSongs.pop()

console.log(favSongs)