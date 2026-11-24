const name = "hello"
const repoCount = 50

console.log(name + repoCount + " World")

console.log(`Hello My Name is ${name} and my Repo Count is ${repoCount}`)

const gameName = new String('Hello-world')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('o'))

const newString = gameName.substring(0,4) 
console.log(newString)

const anotherString = gameName.slice(0,4)
console.log(anotherString)

const newString1 = "  Hello  "
console.log(newString1)
console.log(newString1.trim())

const url = "https://harsh.com/harsh20jaiswal"

console.log(url.replace('%20','-'))

console.log(url.includes('world'))

console.log(gameName.split('-'))