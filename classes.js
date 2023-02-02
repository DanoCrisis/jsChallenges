// let pet = {
//     name: "Bella",
//     age: 2,
//     type: "Dog",
//     breed: "German Shepherd",
//     colour: "Black and Tan",
//     lastFed: "08:00",
//     feedPet (time) {
//     this.lastFed = time;
//     return `Last feed updated to: ${this.lastFed} for ${this.name}`;
//     }
//     }
//     console.log(pet.feedPet("15:00"));
//     console.log(pet.lastFed)


// ---------- Pets --------

// class Pet {
//     constructor(name, age, type, breed, colour, time, personality) {
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
//         this.personality = personality;   
//     }

//     get petInfo () {                                                // a "getter" a function that retrieves data from the object
//         return `${this.name} is a ${this.type}, ${this.age} year(s) old`;   
//     }
//     set fullName (name) {
//         const array = name.split(' ');
//         this.firstname = array[0];
//         this.surname = array[1];
//     }
//     get fullName() {
//         return `${this.firstname} ${this.surname}`
//         }        
//     feedPet (time) {
//     this.lastFed = time;
//     return `Last feed updated to: ${this.lastFed} for ${this.name}`;
//     }
//     }

// const bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00", "Excitable");
// const becky = new Pet("Becky", 16, "Dog", "Staffordshire Bull Terrier", "White & Tan", "12:00", "Greedy");
// const dini = new Pet("Dini", 1, "Cat", "British Shorthair", "Black & White", "09:00", "Playful");
// const stig = new Pet("Stig", 6, "Stegosaurus", "Jurassic", "Brown & Orange", "N/A", "Calm");

// console.log(bella)
// console.log(becky)
// console.log(dini)
// console.log(stig)

// console.log(dini.feedPet("12:00"))

// console.log(bella.petInfo);   // getters do not need arguments they are only intended to retrieve data
// bella.fullName = "Bella Crompton"
// console.log(bella);
// console.log(bella.fullName)

// class PetMeds extends Pet {
//     constructor(name, age, type, breed, colour, time, personality, mtime) {
//     super(name, age, type, breed, colour, time, personality);
//     this.lastMeds = mtime;
//     }
//     giveMeds (time) {
//     this.lastMeds = time;
//     return `Last meds updated to: ${this.lastMeds} for ${this.name}`;
//     }
//     }

// const milly = new PetMeds("Milly", 10, "Cat", "British Shorthair", "Black & White", "09:00", "Sleepy", "11:00");

// console.log(milly)

// // ----------------- Cars ------------------------

// class Car {
//     constructor(nameOfCar, makeOfCar, yearOfMake, inStock) {

//         this.nameOfCar = nameOfCar;
//         this.makeOfCar = makeOfCar;
//         this.yearOfMake = yearOfMake;
//         this.inStock = inStock

//     }
//     soldOut () {
//         this.inStock = false;
//         return `The ${this.nameOfCar} is now sold out. `;
//         }
// }

// class Bike extends Car {
//     constructor(nameOfCar, makeOfCar, yearOfMake, inStock, engineCC) {
//     super(nameOfCar, makeOfCar, yearOfMake, inStock);
//     this.engineCC = engineCC;
//     }
// }

// const carOne = new Car("Diablo SE30", "Lamborghini", 1995, true);
// const carTwo = new Car("Impreza WRX", "Subaru", 2003, true);
// const carthree = new Car("Mercedes C300", "Mercedes", 2008, true);
// const bikeOne = new Bike ("Yamaha MT 15 V2", "Yamaha", 2011, true, 200)

// console.log(bikeOne.engineCC)

// console.log(carOne.soldOut())
// console.log(carOne.inStock)

// ------------------------------------------- Activities ------------------------------------------------

// -------------------------- Activity 1 -------------------------------

class Rental {
    constructor(storeName, storeAddress, storeNumber, movieList) {
        this.storeName = storeName;
        this.storeAddress = storeAddress;
        this.storeNumber = storeNumber;
        this.movieList = movieList;
    }
    get movies () {       
        let string = ""
        for (let mov = 0; mov < this.movieList.length; mov++) {
            string += `${this.movieList[mov][0]} at £${this.movieList[mov][1].toFixed(2)}, `
        }
        return `The movies ${this.storeName} currently has in stock are: ${string.slice(0,(string.length - 2))}. `; 
    }
    addMovie (movie) {
        this.movieList.push(movie);
        return `${movie[0]} is now available at your local ${this.storeName}! `;
        }
}

const test = new Rental ("Blockbosters", "1 Derelict Road, Metro City", "07145 968475", [["Dr Strange", 3.50], ["Peter Pan", .99], ["1917", 5.00]])

// console.log(test)

// -------------------------- Activity 2 -------------------------------

console.log(test.movies)

console.log(test.addMovie(["Lord Of The Rings", 2.50]))

// -------------------------- Activity 3 -------------------------------

console.log(test.movies)

