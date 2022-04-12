// Functions Practice! 

// Complete each question by console logging the result of the function
// Think about what your functions and variable names should be called. Maybe try re using the function with different variables to make sure you've got it right.
// Remember to comment out previous answers so variable names dont clash!




// 1. Create a function that can take a string as an argument, and will return the length of the string
// Eg. Takes in "CodeClan" as an argument and returns 8
var name = "CodeClan"

function lengthOfAString(string){
    var length = string.length
    return length
}

var lengthOfName = lengthOfAString(name)
// console.log(lengthOfName)


// 2. Create a function that can take 3 strings as an argument and will return the total length of all 3 strings
// Eg. Takes in "Code", "Clan", "Glasgow" and returns 15
// this is the roundabout way i did it
// var name1 = "Code"
// var name2 = "Clan"
// var name3 = "Glasgow"

// function lengthOf3Strings(string1, string2, string3){
//     var totalLength = string1.length + string2.length + string3.length
//  return totalLength
// }

// var lengthOfNames = lengthOf3Strings (name1, name2, name3)
// console.log(lengthOfNames)

function lengthOf3Strings(string1, string2, string3){
    return string1.length + string2.length + string3.length
}

// console.log(lengthOf3Strings("Code", "Clan", "Glasgow"))

// note how you do not need to make variables to define each string. if you say return strings one to three and then give them strings like this it will just take those as the strings


// 3. Create a function that takes in a string and returns the string in upper case 
// Eg. Takes in "CodeClan" and returns "CODECLAN"
// var name = "CodeClan"

// function UpperCase(string){
//     var ToUpperCase = string.toUpperCase()
//     return ToUpperCase
// }

// var UpperCaseString = UpperCase(name)
// console.log(UpperCaseString)
// similarly note how the variable is not needed

function upperCaseString(string){
    return string.toUpperCase()
}
// console.log(upperCaseString("CodeClan"))

// 4. Create a function that takes in a string and returns the string in lower case 
// Eg. Takes in "CodeClan" and returns "codeclan"
// var name = "CodeClan"

// function LowerCase(string){
//     var ToLowerCase = string.toLowerCase()
//     return ToLowerCase
// }

function lowerCaseString(string){
    return string.toLowerCase()
}
// console.log(lowerCaseString("CodeClan"))


// 5. Create a function that takes in a string and returns the first letter (Strings can work like arrays!)
// Eg. Takes in "CodeClan" and returns "C"
// var name = "CodeClan"

// function firstLetter(string){
//     var FirstLetterOnly = string[0]
//     return FirstLetterOnly
// }

// var FirstLetterOnlyString = firstLetter(name)
// console.log(FirstLetterOnlyString)

function firstLetter(string){
    return string[0]
}
// console.log(firstLetter("Codeclan"))

// 6. Create a function that will take in a string and return the first 3 letters of the string
// Eg. Takes in "CodeClan" and returns "Cod"
// var name = "CodeClan"

// function firstThreeLettersOnly(string){
//     var letter1 = string.substring(0, 3)
//     var firstThreeLetters = letter1
//     return firstThreeLetters
// }

// var FirstThreeLettersOnlyString = firstThreeLettersOnly(name)
// console.log(FirstThreeLettersOnlyString)

function first3Letters(string){
    return string.slice(0,3)
}

// console.log(first3Letters("CodeClan"))

// 7. Create a function that will take in 2 strings, one for a name and one for a height, and return them in a sentence saying for example "Hi John, you are 5'11".
// var name = "Joe"
// var height = "5'11''"

// function greetings(name, height){
//     var nameAndHeight = "Hi " + name + " you are " + height
//     return nameAndHeight
// }

// var joeGreetings = greetings("Joe", "5'11''")
// console.log(joeGreetings)

function nameAndHeight (name, height){
    return "Hi " + name + ", you are " + height
}
// console.log(nameAndHeight("John", "5'11''"))


// Extension Questions (Try google!)


// 8. Create a function that takes in a string and returns it as an array 
// Eg. It takes in "CodeClan" and returns ["C", "o", "d", "e", "C", "l", "a", "n"]
// var name = "CodeClan"

// function stringToArray(string){
// var array = string.split("")
// return array
// }
// console.log(stringToArray(name))

function stringToArray(string){
    return string.split("")
}
// console.log(stringToArray("CodeClan"))


// 9. Create a function that takes a string as an argument, and returns it in reverse
// Eg "CodeClan" will return as "nlaCedoC"
var name = "CodeClan"

function reverseString(string){
    return string.split("").reverse().join("")
}

// console.log(reverseString("CodeClan"))

// 10. Create a function that will take in 3 strings and return the longest
// Eg. "I", "enjoy", "code" will return "enjoy"

function longestString(string1, string2, string3){
    var longest = string1
    if(string2.length > longest.length){
        longest = string2
    }
    if(string3.length > longest.length){
        longest = string3
    }
    return longest
}

console.log(longestString("I", "enjoy", "code"))



