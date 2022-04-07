var shop = {
    name: "Tigers Drinks Shop",
    location: {city: "Glasgow", postcode: "G2 3BZ"},
    drinks: [
        {drink_name: "Coca Cola", price: 2.50 },
        {drink_name: "Pepsi", price: 0.75 },
        {drink_name: "7up", price: 2.50 },
        {drink_name: "Coke Zero", price: 1.50 },
        {drink_name: "Fanta", price: 0.50 },
        {drink_name: "Fanta", price: 1.25 },
        {drink_name: "Irn Bru", price: 0.90 },
    ]
}

// 1. Console log the shop name
// console.log(shop.name)

// 2. Console log the shops postcode
// console.log (shop.location.postcode)

// 3. Console log all drinks
// console.log(shop.drinks)

// 4. Loop through all the drinks and console log the drink name and price
// for(var drink of shop.drinks)
// console.log(drink.drink_name, drink.price)

// 5. Create a new array for the drink names, and loop through the drinks, adding each drink name to the new array 
// var libations = []

// for(var drink of shop.drinks){
// libations.push(drink.drink_name)
// }
// console.log(libations)

// 6. Create a new array and add only drinks above £1
// var priceyDrinks = []

// for(var drink of shop.drinks){
//     if(drink.price > 1){
//         priceyDrinks.push(drink)
//     }
// }
// console.log(priceyDrinks)

// 7. Create a new array and add drinks that are less than £2 but greater than £1
// var beverages = []

// for(var drink of shop.drinks){
//     if(drink.price < 2)
//         if(drink.price >1)
//     beverages.push(drink)
// }
// console.log(beverages)

// 8. Get the total price of all the drinks (£9.90)
var total = 0
for(var drink of shop.drinks){
total = total + drink.price
}
console.log(total)
