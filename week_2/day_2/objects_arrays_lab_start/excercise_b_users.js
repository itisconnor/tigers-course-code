var users = {
    Jonathan: {
      twitter: "jonnyt",
      lottery_numbers: [6, 12, 49, 33, 45, 20],
      home_town: "Stirling",
      pets: [
      {
        name: "fluffy",
        species: "cat"
      },
      {
        name: "fido",
        species: "dog"
      },
      {
        name: "spike",
        species: "dog"
      }
    ]
    },
    Erik: {
      twitter: "eriksf",
      lottery_numbers: [18, 34, 8, 11, 24],
      home_town: "Linlithgow",
      pets: [
      {
        name: "nemo",
        species: "fish"
      },
      {
        name: "kevin",
        species: "fish"
      },
      {
        name: "spike",
        species: "dog"
      },
      {
        name: "rupert",
        species: "parrot"
      }
    ]
    },
    Avril: {
      twitter: "bridgpally",
      lottery_numbers: [12, 14, 33, 38, 9, 25],
      home_town: "Dunbar",
      pets: [
        {
          name: "monty",
          species: "snake"
        }
      ]
    }
  }
 
//   1. Get Jonathan's Twitter handle (i.e. the string `jonnyt`
console.log(users.Jonathan.twitter)

//   2. Get Erik's hometown
console.log(users.Erik.home_town)

//   3. Get the array of Erik's lottery numbers
console.log(users.Erik.lottery_numbers)

//   4. Get the species of Avril's pet Monty
console.log(users.Avril.pets[0].species)

//   5. Get the smallest of Erik's lottery numbers
console.log(users.Erik.lottery_numbers[2])
//   7. Erik is one lottery number short! Add the number `7` to be included in his lottery numbers
users.Erik.lottery_numbers.push(7)
console.log(users.Erik.lottery_numbers)
//   8. Change Erik's hometown to Edinburgh
users.Erik.home_town = "Edinburgh"
console.log(users.Erik.home_town)
//   9. Add a pet dog to Erik called fluffy
users.Erik.pets.push({name: "fluffy", species: "dog"})
console.log(users.Erik.pets)
//   10. Add another person to the users dictionary
users.Mideon = {
  twitter: "MinistryofDarkness",
  lottery_numbers: [27, 32, 5, 10, 6],
  home_town: "The Dark Side",
}
console.log(users)

