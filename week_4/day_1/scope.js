// no more var
// its either "let name" or "const name"
// let - can change value
// const - cannot change value

// var name = "Connor"

var secretsFunction = function(){
    var pinCode = [3, 8, 2, 1]
    // console.log(name)
    // console.log("pinCode inside the function", pinCode)
}

secretsFunction()
// this is all you need to call this function because console log is part of it

// console.log("pinCode outside the function", pinCode)
// this dont work because pincode is inside the function, it is outside this console logs SCOPE
// var is function scoped
// function scope means variables above the function can be seen and perceived but functions below cannot. if var name was below line 12 then it would break

var filterNamesByFirstLetter = function(names, letter){
    var filteredNames = []
    for(let name of names){
        if(name[0] === letter){
            filteredNames.push(name)
        }
        // console.log(name) -- this with let gives you all the names
    }
    // console.log(name) -- doing this with var name of names results in the last name you put, in this case "Devlin"
    // console.log(name) -- now having replaced var with let this causes an error as name is now contained within the brackets
    // let and const block scoped -- block = curly brackets
    return filteredNames
}

var students = ["Connor", "Harrison", "Abbas", "Mohamed", "Arad", "AJ", "Devlin"]
// console.log(filterNamesByFirstLetter(students, "C"))

// remember that strings are considered arrays unto themselves, so finding a given letter of a string is as simple as figuring out the index number


let calculateEnergy = function(mass){
    const speedOfLight = 299792458
    return mass * speedOfLight ** 2
}

console.log(calculateEnergy(75))

// const is used for things that do not change. much like the difference between ni naru and to naru
// if you put speedOfLight ++ in there then it will break because you can't change a constant
// if you dont put anything, var const or let and its just speedOfLight then its globalscoped and THATS BAD DONT DO IT
