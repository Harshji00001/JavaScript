


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
// console.log(loginUserMessage("Hello"))

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hello",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "Hell",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returenSecondValue(getArray) {
    return getArray[1]
}

console.log(returenSecondValue([200,400,500,1000]))