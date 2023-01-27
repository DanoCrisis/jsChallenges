// const holidayDestination = (country, month) => {
//     console.log(`Yay! I am going on holiday to ${country} in ${month}. I can't wait. `)
// }

// holidayDestination("Greece", "July")

// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiply(2,5))

const replenishStock = (productCode) => {
    console.log(`Order product number ${productCode}, as the stock is low. `)
}

const reducePrice = (productCode, originalPrice) => {
    let salePrice = originalPrice / 2
    console.log(`Product number ${productCode} is now £${salePrice}. `)
}

const checkStock = (productCode, quantity, originalPrice) => {
    if (quantity <= 10) {
        replenishStock(productCode)
    }
    else if (quantity > 100) {
        reducePrice(productCode, originalPrice)
    }
    else {
        console.log("Don't order stock. ")
    }
}

checkStock(345678, 200, 100)

// declaration function - not secure

function notSecure(message) {
    console.log(`${message} I am not secure. `)
}
notSecure("Error")

// anonymous function - secure but outdated

const secure = function(message) {
    console.log(`${message} I am secure. `)
}
secure("Acceptable")


// -------------------------------------------- Activities ------------------------------------------------------------

// -------------------- Activity 1 -------------
// -------------------- Activity 2 -------------

const sayHello = (Myname, drink) => {
    console.log(`Hi there, my name is ${Myname}, would you like a ${drink}? `)
}

sayHello("Daniel", "Coca Cola")



