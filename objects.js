// let day = "Monday"

// const person = {
//     firstName : "Sally",
//     lastName : "Evans",
//     age : 27,
//     occupation : "Sales Assistant",
//     married : false,
//     homeOwner : false,
//     hobbies : ["tennis", "gardening", "bungee jumping"],
//     marketingOp () {
//         if (this.homeOwner == false && this.age > 25){
//             return "Send mortgage offer e-mail. "
//         }
//         else if (this.homeOwner == false && this.age < 25) {
//             return "Send summer holiday fun credit card offer. "
//         }
//         else if (this.homeOwner == true && this.age > 25) {
//             return "Pension investment offer. "
//         }
//         else {
//             return "Sensible savings offer. "
//         }

//     }
// }

// console.log(person["firstName"])
// console.log()

// person.owner = true
// // console.log(person)

// if (day === "Saturday" || day === "Sunday") {
//     console.log(`Great it's ${day}, let's play ${person.hobbies[0]}! `)
//     console.log()
// }else {
//     console.log(`Oh no it's ${day}, I hate being a ${person.occupation}. `)
//     console.log()
// }

// console.log(person.marketingOp())
// console.log()



// // -------------------------------------------------- Activities ---------------------------------------------------------

// // ----------------------------- Activity 1 -------------------------------

// const pet = {
//     petName : "Stig",
//     typeOfPet : "Stegosaurus",
//     age : 5,
//     colour : "Brown", 
//     traits : ["Squishy", "Calm", "Good Listener"],
//     eating() {
//         return `${this.petName} is eating`
//     },
//     drinking() {
//         return `${this.petName} is drinking`
//     }
// }

// console.log(`My pet is called ${pet.petName}, he is a ${pet.age} year old ${pet.typeOfPet}, and is a ${pet.colour} colour. `)
// console.log()

// // ----------------------------- Activity 2 -------------------------------

// pet.colour = "Brown and Orange"
// console.log(`My pet is called ${pet.petName}, he is a ${pet.age} year old ${pet.typeOfPet}, and is a ${pet.colour} colour. `)
// console.log()

// // ----------------------------- Activity 3 -------------------------------

// console.log(`My pet is also ${pet.traits[1]}, ${pet.traits[0]}, and is a ${pet.traits[2]}. `)
// console.log()

// // ----------------------------- Activity 4 -------------------------------

// console.log(pet.eating())
// console.log()
// console.log(pet.drinking())

// ----------------------------- Activity 5 -------------------------------

const coffeeShop = {
    drinksWithPrices : {
        "Soft Drink" : 1,
        "Tea" : 1.5,
        "Flat White" : 2,
        "Latte" : 2,
        "Mocha" : 2.5,
        "Cappuccino" : 3
    },
    foodWithPrices : {
        "Slice of Cake" : 3,
        "Fries" : 3,
        "Cheese Salad" : 4,
        "Jacket Potato" : 5,
        "Club Sandwich" : 5,
        "Cheeseburger" : 6
    },
    drinksOrdered(drinks) {
        return `You have ordered the ${drinks} and this costs £${this.drinksWithPrices[drinks]} `
    },
    foodOrdered(food) {
        return `You have ordered the ${food} and this costs £${this.foodWithPrices[food]} `
    },
}

console.log(coffeeShop.drinksOrdered("Tea"))
console.log(coffeeShop.foodOrdered("Fries"))