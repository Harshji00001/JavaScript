// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "hello"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularbase = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hello",
            lastname: "World"
        }
    }
}

// console.log(regularbase.fullname?.userfullname.firstname)

const object1 = {1: "a", 2: "b"}
const object2 = {3: "c", 4: "d"}
const object3 = {5: "e", 6: "f"}

// const object3 = { object1, object2}
// const object4 = Object.assign(object1, object2, object3)

const object4 = {...object1,...object2,...object3} 
// console.log(object4)


const users = [
    {
        id: 1,
        email: "hr@gmail.com"
    },
    {
        id: 1,
        email: "hr@gmail.com"
    },
    {
        id: 1,
        email: "hr@gmail.com"
    }
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "Js in English",
    price: "999",
    courseInstructor: "Hello" 
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)

// {
//    "name": "Hello",
//    "coursename": "Js in English",
//    "price": "free"
// }

[
    {},
    {},
    {}
]