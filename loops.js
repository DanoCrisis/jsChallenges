// let favHolidayDestinations = [
//     "Venice, Italy",
//     "Paris, France",
//     "Barcelona, Spain"
// ]

// for (
//     let i = 0;
//     i < favHolidayDestinations.length;
//     i ++) {
//         console.log(favHolidayDestinations[i])
//     }

// for (let i = 0;
//     i <= 10;
//     i++)    // Iteration happens AFTER the {} has occurred not before
//     {
//     console.log(i += 2)  // Not wise to change the iteration in the loop itself
//     }


// let lives = 3

// while (lives > 0){
//     console.log("Well done your still in the game. ")
//     lives --
// }
// console.log("You Died! ")

// let currentDiceRoll = 3

// while (currentDiceRoll != 1){
//     console.log(currentDiceRoll)
//     currentDiceRoll = Math.floor(Math.random()*6)+1
// }
// console.log(currentDiceRoll)



// ----------------------------------------- Activities ----------------------------------------------------------

// --------------------- Activity 1 ------------------------

let favHolidayDestinations = [
    "Venice, Italy",
    "Paris, France",
    "Barcelona, Spain",
    "Prague, Czech Republic",
    "Lisbon, Portugal"

]

for (
    let i = 2;
    i < favHolidayDestinations.length;
    i ++) {
        console.log(favHolidayDestinations[i])
    }
console.log()
for (
    let i = (favHolidayDestinations.length - 1);
    i > -1;
    i --) {
        console.log(favHolidayDestinations[i])
    }


// --------------------- Activity 2 ------------------------

let evenNumbers = []

for (let n = 0;
    n < 20;
    n ++)
    {if (n % 2 == 0){evenNumbers.push(n)}
    }

console.log(evenNumbers)

evenNumbers = []

for (let n = 20;
    n >= 0;
    n --)
    {if (n % 2 == 0){evenNumbers.push(n)}
    }

console.log(evenNumbers)

// --------------------- Activity 3a ------------------------

let oddNumbers = []

for (let n = 0;
    n < 30;
    n ++)
    {if (n % 2 != 0){oddNumbers.push(n)}
    }

console.log(oddNumbers)

// --------------------- Activity 3b ------------------------

let age = 0

while (age < 18){
    console.log(`You're a child of ${age}. `)
    age ++
}
console.log("You're an adult now. ")

// --------------------- Activity 4 ------------------------

let randomNumber = 0
let z = 0

while (z < 6){
    randomNumber = Math.floor(Math.random()*1000)+1
    console.log(randomNumber)
    z ++
}

// --------------------- Activity 5 ------------------------

someFilms = [
    "Star Trek",
    "Gravity",
    "Ghost",
    "Shaun of the Dead"
]

for (let n = 0;
    n < someFilms.length;
    n ++)
    {console.log(`Now showing : ${someFilms[n]}`)
    if (n == 2) {
        if (someFilms[n] == "Ghostbusters"){
            console.log("Yay its Ghostbusters! ")}
        else {console.log("Boo! We want Ghostbusters. ")}
    }
    }

// --------------------- Activity 6 ------------------------

let randomNumber2 = 0
let y = 0

while (y < 6){
    randomNumber2 = Math.ceil(Math.random()*30)
    if (randomNumber2 % 7 == 0){
        console.log(`The number ${randomNumber2}; is divisible by 7. `)
    }
    else {console.log(`The number ${randomNumber2}; is not divisible by 7. `)}
    y ++
}

// --------------------- Activity 7 ------------------------


let bobsFollowers = [
    "Pete",
    "Steve",
    "Mary",
    "Anne"
]

let hannahsFollowers = [
    "Lisa",
    "Steve",
    "Dave",
    "Annabelle"
]
for (let x = 0; x < bobsFollowers.length; x++) {
    for (let y = 0; y < hannahsFollowers.length; y++){
        if (bobsFollowers[x] == hannahsFollowers[y]){
            console.log(bobsFollowers[x])
        }
    }
}