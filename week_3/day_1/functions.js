function sayHello(name){
    // console.log("Hello " + name)
    var greeting = "Hello " + name
    return greeting
}
var newGreeting = sayHello("Harrison")
// console.log(newGreeting);
function timeOfDay(time, date){
    var timeAndDate = "The time is " + time + " on " + date
    return timeAndDate
}
var todaysDate = timeOfDay("10:48", "11th of April")
// console.log(todaysDate);
var todaysDate2 = timeOfDay("11:25", "12 of April")
// console.log(todaysDate2);



// Calculator time

function add(firstNumber, secondNumber){
    var result = firstNumber + secondNumber
    return result
}

var answer = add(1,4)
var answer2 = add(10,100)
//  console.log(answer2)

// subtract, multiply and divide

function subtract(firstNumber, secondNumber){
    var result = firstNumber - secondNumber
    return result
}

var subtractAnswer = subtract(1, 10)
//  console.log(subtractAnswer)

function multiply(firstNumber, secondNumber){
    var result = firstNumber * secondNumber
    return result
}

var multiplyAnswer = multiply(5, 5)
//  console.log(multiplyAnswer)

function divide(firstNumber, secondNumber){
    var result = firstNumber / secondNumber
    return result
}

var divideAnswer = divide(100, 9)
//  console.log(divideAnswer)

// the function is named (much like user of users it can be whatever) then in the brackets you put the parameters
// then in the object brackets you put a variable for a result that involves those parameters, in this case you insert a mathematical equation
// afterwards you return the result
// as i've just learned, variables within a function can only exist in that function, so the firstNumber secondNumber thing i was worrying about doesn't matter

// you CAN do the following

function subtract(num1, num2){
    return num1 - num2
}

// i want to pass in a string and get returned the length of the string
var name = "dolgorsurengiin serjbudee"

function lengthOfAString(string){
    var length = string.length
    return length
}

var lengthOfName = lengthOfAString(name)
// console.log(lengthOfName)

// i want the total length of 2 strings added together
var ringName = "blue wolf"
var book = "great expectations"
var game = "sonic r"

function lengthOf2Strings(string1, string2){
    var totalLength = string1.length + string2.length
 return totalLength
}

var lengthOfNames = lengthOf2Strings (name, ringName)
var lengthOfMedia = lengthOf2Strings (book, game)
console.log(lengthOfMedia)

// lengthOf2Strings is established as being string1 and string2. you then need to make a variable for each strings length and then their total length
// by adding them together and then return that total length. then you must define what strings are being shown by saying lengthOfX = lengthOf2Strings and then
// putting the strings you want added in the bracket. i THINK

