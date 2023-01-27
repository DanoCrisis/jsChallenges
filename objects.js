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

tableOrder = ["Flat White", "Cheeseburger", "Fries", "Latte", "Slice of Cake", "Gazpacho Soup"]  // Waiter takes an order from a table
foodOrder = []      // empty food order array waiting to be filled
drinksOrder = []    // empty drinks order array waiting to be filled
confusedOrder = []   // empty unmatched array waiting to be filled


const coffeeShop = {                 // Coffee shop object with 2 objects and 3 methods in it
    drinksWithPrices : {
        "Soft Drink" : 1,
        "Tea" : 1.5,
        "Flat White" : 2,               // an object with the keys as drinks and the values as prices
        "Latte" : 2,
        "Mocha" : 2.5,
        "Cappuccino" : 3
    },
    foodWithPrices : {
        "Slice of Cake" : 3,
        "Fries" : 3,
        "Cheese Salad" : 4,            // an object with the keys as food items and the values as prices
        "Jacket Potato" : 5,
        "Club Sandwich" : 5,
        "Cheeseburger" : 6
    },
    drinksOrdered(drinks) {           // Method for showing the drinks order and totaling up the cost of the drinks
        drinkTotal = 0
        console.log()
        for (x=0; x < drinks.length; x++){
            drinkTotal += this.drinksWithPrices[drinks[x]]       // adds up each value for price of drink and saves it in the variable drinkTotal
            console.log(`You have ordered the ${drinks[x]} at £${this.drinksWithPrices[drinks[x]]}`)  // prints out each drink you have ordered along with the price to the console
        }
        console.log()
        console.log(`The total amount for the drinks order is £${drinkTotal}`)  // prints out the variable drinkTtotal to the console
        console.log()
    },
    foodOrdered(food) {
        foodTotal = 0
        console.log()
        for (x=0; x < food.length; x++){
            foodTotal += this.foodWithPrices[food[x]]
            console.log(`You have ordered the ${food[x]} at £${this.foodWithPrices[food[x]]}`)
            // return `You have ordered the ${food[x]} at £${this.foodWithPrices[food[x]]}`
        }
        console.log()
        console.log(`The total amount for the food order is £${foodTotal}`)
        // return `The total amount for the food order is £${foodTotal}`
        console.log()
    },
    cannotOrder(noOrder) {
        console.log()
        for (x=0; x < noOrder.length; x++){
            console.log(`You have ordered the ${noOrder[x]}, but I am afraid that is not on the menu, can I get you something else? `)
        }
        console.log()
    },
    finalBill(drinkTotal, foodTotal) {         // adds the drinks and food totals together and returns a string to show this
        return `The total amount for your food and drinks today will be £${drinkTotal + foodTotal}`
    }
}


for (x=0; x < tableOrder.length; x++){      // Checks if item in the table order is in the drinks / food menu
    if (tableOrder[x] in coffeeShop.drinksWithPrices){
        drinksOrder.push(tableOrder[x])
    }
    else if (tableOrder[x] in coffeeShop.foodWithPrices){
        foodOrder.push(tableOrder[x])
    }                                           // if it is it adds it to the correct order, if not it adds it to the confusedOrder
    else {
        confusedOrder.push(tableOrder[x])
    }
}

// console.log(drinksOrder)
coffeeShop.drinksOrdered(drinksOrder)

// console.log(foodOrder)
coffeeShop.foodOrdered(foodOrder)
// console.log(coffeeShop.foodOrdered(foodOrder))

coffeeShop.cannotOrder(confusedOrder)

console.log(coffeeShop.finalBill(drinkTotal, foodTotal))






