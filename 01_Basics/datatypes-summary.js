// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 34567345366025911596839392584772326n

// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["Ironman","Spiderman","Batman","Superman"]
let myObject = {
    name: "Harsh",
    age: 22
}

const myfunction = function() {
    console.log("Hello World")
}

console.log(typeof heros)