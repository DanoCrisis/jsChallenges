// let globalVar = "globalVar";
//     console.log(`Global Scope: ${globalVar}`);
//     //Output: Global Scope: globalVar
// const callVar = () => {
//     console.log(`Inside function: ${globalVar}`);
//     //Output: Inside function: globalVar
// }
// callVar();


// let stringLet = "let string";
// var stringVar = "var string";
// const newString = () => {
//     let stringLet = "new let string";
//     var stringVar = "new var string";
//     console.log(`Inside function: ${stringLet}`); //new
//     console.log(`Inside function: ${stringVar}`); //new
// }
// newString();
// console.log(`Outside function: ${stringLet}`); //old
// console.log(`Outside function: ${stringVar}`); //old

// function startLet(){
//     for (let i = 0; i < 5; i++){
//     console.log(i); //Output: 0,1,2,3,4
//     }
//     console.log(i); //ReferenceError: i is not defined     
//     }
//     function startVar(){
//     for (var i = 0; i < 5; i++){
//     console.log(i); //Output: 0,1,2,3,4
//     }
//     console.log(i); //Output: 5
//     }
//     console.log("Running with let:");
//     startLet();
//     console.log("Running with var:");
//     startVar();



// const whichGreeting = (timeOfDay) => {
//         console.log(`Good ${timeOfDay}`);
//     }

// const greet = (time, fn) => {
//     if (time < 1200){
//     fn("Morning");
//     } else if (time >= 1200 && time < 1800){
//     fn("Afternoon");
//     } else{
//     fn("Evening");
//     }
//     }

// greet(1400, whichGreeting);


// const add = () => {
//     return 2 + 3;
//     }

//     add(); //logs 5

// add; // logs the whole function

// const add = (num1) => {
//     return (num2) => {
//         return num1 + num2;
//     }
// }

// console.log(add(2)); //returns the function in the main function

// const add = (num1) => {
//     return (num2) => {               // really bad example for a funtion returning a function
//         return num1 + num2;
//     }
// }

// console.log(add(2)(1)); //output: 3


// ------------------------------ Activities ------------------------------------------------

// ----------------- Activity 1 ---------------

const simpFunc = () => {
    console.log("Hello Code Nation")
}

const multiFunk = (num, func) => {
    let x = 0
    while (x < num) {
        func()
        x ++
    }

}

multiFunk(5, simpFunc)

// ----------------- Activity 2 ---------------

let numbers = [3, 5, 2, 7, 6]
console.log(numbers)

const multiply = (num) => {   
    return num*3
}

let multiplied = numbers.map(multiply) 
console.log(multiplied)

// let multiplied = numbers.map(x => x*3) 
// console.log(multiplied)