// Assign to password a password 
// password = "";

// Declare a variable passwordAnalysis and assign it to false

// Declare a variable counter and assign it to the number 0


// Create an if structure so that will check if the password is between 
// 8 and 16 characters in length, inclusive
// If the length is between the two numbers, then
// set the variable passwordAnalysis to true
// This can be done as one line if statement 


// Create an if structure to check if passwordAnalysis is true
// If it is true then within the first scope write the code below 
// if( ){

    // Create an if structure to check if the password contains an upper case letter
    // The following code will return true -> Boolean("Hello".match(/[A-Z]/))
    // /[A-Z]/ is a short way (regex - regular expression) to check if a string has any letter between A and Z; capital
    // If there is a capital case in the password, increment counter by 1
    // if( ){ }
    
    // Create an if structure to check if the password contains a lower case letter
    // If there is a lower case in the password, increment counter by 1

    // Create an if structure to check if the password contains any of the digits 0-9
    // Remember that the encoding table for Unicode has the numbers 0-9 as characters
    // So you can check for them the same as the letters
    // If there is a lower case in the password, increment counter by 1

    // Create an if structure to check if the password includes any of the following symbols
    // ! Â£ $ % . *
    // .include() can take mulitple parameters and will return true if any of the arguments is found


// } 

// Create a SWITCH CASE sturcture
// If counter is 1, output to the console the text -> "This is a weak password"
// If counter is 2, output to the console the text -> "This is a sufficient password"
// If counter is 3, output to the console the text -> "This is a adequate password"
// If counter is 4, output to the console the text -> "This is a strong password"
// By defauls it should output the text -> "The password is not long enough"

let password = "P@ssw0rd"
let passwordAnalysis = false
let passwordShort = false
let passwordLong = false
let counter = 0

if (password.length >= 8 && password.length <= 16) {
    passwordAnalysis = true
}
else if (password.length < 8) {
    passwordShort = true
}
else if (password.length > 16) {
    passwordLong = true
}


if (Boolean(password.match(/[A-Z]/))) {
    counter += 1                                    
}
if (Boolean(password.match(/[a-z]/))) {
    counter += 1                                    
}
if (Boolean(password.match(/[0-9]/))) {
    counter += 1                                    
}
if (password.includes("!") || password.includes("@") || password.includes(".") || password.includes("#") || password.includes("%") || password.includes("*") || password.includes("£")) {
    counter += 1                                    // did not seem to work with several arguments in the same .includes() statement
}


if (passwordAnalysis == true) {
    if (counter == 1) {
        console.log("This is a weak password. ")
    }
    else if (counter == 2) {
        console.log("This is a sufficient password. ")
    }
    else if (counter == 3) {
        console.log("This is an adequate password. ")
    }
    else if (counter == 4) {
        console.log("This is a strong password. ")
    }
    
}
else {
    if (passwordShort == true) {
        console.log("The password is not long enough. ")
    }
    else if (passwordLong == true) {
        console.log("The password is too long. ")
    }
}

console.log(counter)


// const person = {
//     firstName : "Dan",
//     favColour : "Blue"
// }

// let newArray = [
//     {
//         firstName : "Pete", 
//         favColour : "Yellow"
//     },
//     {
//         "firstName" : "Sarah", 
//         "favColour" : "Green"
//     },
//     person
// ]

// console.log(newArray[0])
// console.log(newArray[0].firstName)
// console.log(newArray[0][firstName])
// console.log(newArray[1]."firstName")
// console.log(newArray[1]["firstName"])
// console.log(newArray[2])
// console.log(newArray[2].firstName)
// console.log(newArray[2].favColour)

