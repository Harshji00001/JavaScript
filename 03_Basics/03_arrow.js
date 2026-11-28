const user = {
    username: "Harsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Hello"
// user.welcomeMessage()

// console.log(this)

// function that() {
//     let username = "Hello"
//     console.log(this)
// }

// that()

// const that = function () {
//     let username = "hello"
//     console.log(this.username)
// }

const that = () => {
    let username = "hello"
    console.log(this)
}


// that()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Hello"})


console.log(addTwo(3,4))


// const myArray = [2,5,6,3,4]

// myArray.forEach()