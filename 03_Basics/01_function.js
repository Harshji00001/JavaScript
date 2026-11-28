


function sayName() {
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
}

// sayName()

// function addTwoNumbers(number1, number2) {

//    console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result: ",result)


function loginUserMessage(username = "corr") {
    if(!username) {
        console.log("Please Enter a username")
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aryan"))
console.log(loginUserMessage("Hello"))