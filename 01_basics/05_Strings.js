const name = "Gautam"
const repoCount = 50

console.log(name + repoCount + "Value") //DOntv use it
console.log(`Hello! My name is ${name} and my Repo Count is ${repoCount}`);


//Best way to define string is using objects
const gameName = new String('hitesh hc')

// console.log(gameName[0]);
// console.log(gameName.length)
// console.log(gameName.toUpperCase())

const newString = gameName.substring(0,4)
console.log(newString);
const newStringOne = "     hitesh    "
console.log(newStringOne.trim());

const url = "https://www.google.com/gautam%%222rana"
console.log(url.replace('%%222','-'))
console.log(url.includes('gautam'))
console.log(gameName.split(' '))