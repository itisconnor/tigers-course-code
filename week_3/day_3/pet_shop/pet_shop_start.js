var myPetShop = {
    admin: {
        total_cash: 1000,
        pets_sold: 0,
    },
    name: "Camelot of Pets",
    pets: [
        {
            name: "Sir Percy",
            pet_type: "cat",
            breed: "British Shorthair",
            price: 500
        },
        {
            name: "King Bagdemagus",
            pet_type: "cat",
            breed: "British Shorthair",
            price: 500
        },
        {
            name: "Sir Lancelot",
            pet_type: "dog",
            breed: "Pomsky",
            price: 1000,
        },
        {
            name: "Arthur",
            pet_type: "dog",
            breed: "Husky",
            price: 900,
        },
        {
            name: "Tristan",
            pet_type: "cat",
            breed: "Basset Hound",
            price: 800,
        },
        {
            name: "Merlin",
            pet_type: "cat",
            breed: "Egyptian Mau",
            price: 1500,
        }
    ]
}



var pet1 = {
    name: "Norman",
    pet_type: "dog",
    breed: "Husky",
    price: 4000,
}


// 1. Create a function to return a pet shops name

function petShopName(petShops){
    return petShops.name
}

// console.log(petShopName(myPetShop))


// 2. Create a function that will return a pet shops total cash

function totalCash(petShop){
    return petShop.admin.total_cash
  }

//    console.log(totalCash(myPetShop))


// 3. Create a function that can take in an amount of money and add it to a pet shops total cash

function moMoney(petShop, amount){
    petShop.admin.total_cash = petShop.admin.total_cash + amount
    return petShop.admin.total_cash
    }

    //  console.log(moMoney(myPetShop, 100))

// console.log(moMoney(myPetShop.pets))

// 4. Create a function that can take in an amount of money and remove it from a pet shops total cash

function lessMoney(petShop, amount){
    var subMoney = amount
    subMoney = petShop.admin.total_cash - subMoney
    return subMoney
    }

    //  console.log(lessMoney(myPetShop, 100))

// 5. Create a function that can add 1 to a pet shops amount of pets sold

function newSale(petShop){
    var sale = 1
    petShop.admin.pets_sold = petShop.admin.pets_sold + sale
    return petShop.admin.pets_sold
}

// console.log(newSale(myPetShop))

// 6. Create a function that can return how many pets a pet shop has in its stock

function petAmount(petShop){
    return petShop.pets.length
}

// console.log(petAmount(myPetShop))

// 7. Create a function that can return a pet from a pet shop, by its name

function findByName(pets, searchPet){
    for(var pet of pets){
      if(pet.name === searchPet)
      return pet
    }
    return "Not Found"
}

// console.log(findByName(myPetShop.pets, "Tristan"))

// 8. Create a function that can return the total cost of all pets in a pet shop

// function totalCash(petShops){
//     var total = 0
//     for(var pet of petShops){
//       total = pet.price + total
//     }
//     return total
//   }

//     console.log(totalCash(myPetShop.pets))

    function cashTotal(pets){
        var total = 0
        for(var pet of pets){
            total = pet.price + total
        }
        return total
    }
    //  console.log(cashTotal(myPetShop.pets));

// 9. Create a function that can return all the pets for a given breed

function breedFinder(pets, searchBreed){
    var chosenBreed = []
    for(var pet of pets){
        if(pet.breed === searchBreed){
            chosenBreed.push(pet)
        }
    }
    return chosenBreed
}

// console.log(breedFinder(myPetShop.pets, "British Shorthair"))

// 10. Create a function that can add a pet to stock (Use pet1 above to add)

function addToStock(petShop, pet){
    petShop.pets.push(pet)
    return petShop.pets
}

console.log(addToStock(myPetShop, pet1))

// 11. Create a function that can remove a pet from stock
//. Hint: Use pet1 from above (make sure its added), find its index and remove with splice

function terminatePet(petShop, pet){
    var index = petShop.pets.indexOf(pet)
    petShop.pets.splice(index, 1)
    return petShop.pets
}

// console.log(terminatePet(myPetShop, pet1))


// 12. Sell a pet: Create a function that can remove a pet from stock, and also add the cost of the pet to the total cash of the shop, and also add 1 to the amount of pets sold. (Re-use your functions!)

function petSoldRamifications(petShop, pet){
    terminatePet(petShop, pet)
    moMoney(petShop, pet.price)
    newSale(petShop)
    return petShop
}
console.log(petSoldRamifications(myPetShop, pet1));

// function terminatePet(petShop, name){
//     petShop.pets.
//     if(petShop.pets.name === name){
        
//     }
//     return petShop.pets
// }
