// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Harsh",
    "Full Name": "Hello World",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hello@google.com",
    isLocation: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full Name"])
// console.log(JsUser[mySym])

JsUser.email = "Hello@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Hello@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello Js user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())