var sports = ["football", "tennis", "rugby"]
// console.log(sports[2])
console.log("Array Length: ", sports.length)


//  Adds to the array
sports.push("curling")
sports.push("snooker")
sports.push("darts")

// Remove the last element in the array
var removedSport = sports.pop()
// console.log("All sports: ", sports)
// console.log("Removed Sport: ", removedSport)

// Remove the first element in the array
var removedFirstSport = sports.shift()
console.log("Removed from Front ", removedFirstSport)
console.log(sports)

// Add an element to the start of the array
sports.unshift("Basketball")
console.log(sports)

// Removing elements anywhere in the array
// 1. What index we are starting at
// 2. How many are we removing
var splicedSport = sports.splice(2, 1)
console.log(sports)
console.log("Spliced sport: ", splicedSport)

// Add elements anywhere in the array
// 3. The element I want to add
sports.splice(2, 1, "golf")
console.log(sports)
