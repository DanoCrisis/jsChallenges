// let hunger = "Full"

// if (hunger == "Hungry") {console.log("Yes please, I'm starving. ")}
// else if (hunger == "Full") {console.log("No thanks I'm full. ")}
// else {console.log("Oh go on then why not. ")}

// let music = "Classical"

// if (music == "Classical") {console.log("Oh how relaxing. ")}
// else if (music == "Disco") {console.log("Where are my dancing shoes? ")}
// else if (music == "Dance") {console.log("Where is the party? ")}
// else {console.log("Turn it down! ")}

// if (4 == "4") {console.log("True")}   // == checks if the two values regardless of type are equal 
// else {console.log("False")}


// if (4 === "4") {console.log("True")}   // === checks if the two values and types are equal 
// else {console.log("False")}

// let hunger = "Hungry"
// let food = "Peas"

// if (hunger == "Full" && food == "Ice Cream") {console.log("Of course, who wouldn't? ")}   // Uses the && to check if both statements are true
// else if (hunger == "Hungry" && food == "Ice Cream") {console.log("Yes please I am starving, could I also have a pizza? ")}
// else if (hunger == "Hungry" && food == "Sprouts") {console.log("You know what; I am good. ")}
// else if (hunger == "Full" && food != "Ice Cream") {console.log("No thanks I am stuffed. ")}  // Uses the != to check if it does not equal
// else {console.log("Yeah sounds good. ")}


// let food = "Chips"

// if (food == "Ice Cream" || food == "Pizza") {console.log("Yay lets eat!!! ")}
// else if (food == "Sprouts" || food == "Brocolli") {console.log("Ugh, no thanks. ")}
// else {console.log("Okay then, why not. ")}


// let food = "Chips"

// switch(food) {

//     case "Ice Cream":
//     case "Pizza":
//         console.log("Let's Eat. ")
//         break
//     case "Sprouts":
//     case "Broccoli":
//         console.log("Urg, no thanks! ")
//         break
//     default:
//         console.log("Okay, go on then, why not? ")
// }



// ------------------------------------------- Activities -----------------------------------------------------------------

// ------------------ Activity 1 -------------

let music = "Disco"

if (music == "Classical") {console.log("Oh how relaxing. ")}
else if (music == "Disco") {console.log("Where are my dancing shoes? ")}
else if (music == "Dance") {console.log("Where is the party? ")}
else {console.log("Turn it down! ")}

// ------------------ Activity 2 -------------

let age = 17

if (age > 17) {console.log("Yes I can serve you. ")}
else {console.log("You arn't old enough. ")}

// ------------------ Activity 3 -------------

let age2 = 18
let country = "UK"

if ((age2 > 17) && (country == "UK")) {console.log("Yes I can serve you. ")}
else {console.log("You arn't old enough. ")}

// ------------------ Activity 4 -------------

let day = "Saturday"

if (day == "Saturday" || day == "Sunday") {console.log("Yay it's the weekend! ")}
else {console.log("Oh no it's work again! ")}

// ------------------ Activity 5 -------------

let pizzaTopping = "Ham"

switch (pizzaTopping) {

    case "Chicken":
    case "Pepperoni":
        console.log("These are important ingredients for my pizza! ")
        break

    case "Ham":
    case "Mushroom":
        console.log(`I don't mind having ${pizzaTopping} on my pizza. `)
        break

    case "Cheese":
    case "Tomato":
        console.log(`${pizzaTopping} is the bare minimum, get some more toppings on there! `)
        break

    case "Pineapple":
    case "Jalapeno":
        console.log(`${pizzaTopping} should never disgrace the pizza with it's presence. `)
        break

    default:
        console.log("Is that even food? ")
}

// ------------------ Activity 5 -------------

let password = "Super Secure Password"
let lengthOfPass = password.length

// console.log(lengthOfPass)

if (lengthOfPass < 8) {console.log(`Your password only has ${lengthOfPass} characters in it, please make it a minimum of 8 Characters long. `)}
else if ((password == "Password") || (password == "password")) {console.log(`Your password cannot be ${password}, think a little harder. `)}
else {console.log(`Your password is ${password}, thank you for giving me your password. `)}


// ------------------ Activity 6 -------------

let numb = 115

if ((numb % 5 == 0) && (numb % 3 == 0)) {console.log("Fizz Buzz!")}
else if (numb % 3 == 0) {console.log("Fizz. ")}
else if (numb % 5 == 0) {console.log("Buzz. ")}
else {console.log(`Sorry ${numb} is not divisible by 5 or 3, you lose,`)}


// ------------------ Activity 7 -------------

let time = 8

let placeOfWork = "Nuclear Power Plant"
let homeStreet = "Evergreen Terrace"
let hiddenPleasure = "Eating Donuts"

if (time % 1 != 0) {console.log(`Alright you caught me I'm ${hiddenPleasure}. `)}
else if ((time >= 9) && (time <= 17)) {console.log(`Im at the ${placeOfWork}. `)}
else if ((time >= 19) || (time <= 7)) {console.log(`Im at home on ${homeStreet}. `)}
else {console.log(`Im travelling in my car. `)}


// ------------------ Activity 8 -------------


let unknown = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

let x = 0

let a = unknown.lastIndexOf("a")
if (a > x) {x = a}

let e = unknown.lastIndexOf("e")
if (e > x) {x = e}

let i = unknown.lastIndexOf("i")
if (i > x) {x = i}

let o = unknown.lastIndexOf("o")
if (o > x) {x = o}

let u = unknown.lastIndexOf("u")
if (u > x) {x = u}

console.log(x)

// ------------------ Activity 9 -------------

let word = "quetzalcoatl"

let start = word.charAt(0)
let end = word.charAt(word.length - 1)

if (start === end) {console.log(true)}
else {console.log(false)}

console.log()
console.log(word.endsWith(word[0]))    // Simpler way


// ------------------ Activity 10 -------------

let num1 = 7
let num2 = 6
let sum = num1 + num2


if (sum % 2 == 0) {console.log(sum)}
else {console.log(num1 * num2)}


// ------------------ Activity 11 -------------

let num = 8965412332145698

console.log(num)
console.log()
let text = num.toString()
console.log(text)
console.log()
let array = text.split("")
console.log(array)
console.log()
let arrayBackwards = array.reverse()
console.log(arrayBackwards)
console.log()
let backwardsText = arrayBackwards.join("")
console.log(backwardsText)
console.log()

if (text === backwardsText) {console.log("Yay you have a pallindromic number :) ")}
else {console.log("Aww you don't have a pallindromic number, :( ")}