// array

const myarray = [0,1,2,3,4,5,'Harsh']
const myHeroes = ["Ironman","America"]
const myarr2 = new Array(1,2,3,4,5)
// console.log(myarray)
// console.log(myarr2[2])

// Array Methods

// myarr2.push(6)
// myarr2.push(7)
// myarr2.pop()

// myarr2.unshift(9)
// myarr2.shift()

// console.log(myarr2.includes(9))
// console.log(myarr2.indexOf(3))

// const newArray = myarr2.join()

// console.log(typeof newArray)
// console.log(myarr2)


// slice, splice

console.log("A ", myarr2)

const myn1 = myarr2.slice(1,3)

console.log(myn1)
console.log("B ",myarr2)


const myn2 = myarr2.splice(1, 3)
console.log("C ",myn2)
console.log(myn2)