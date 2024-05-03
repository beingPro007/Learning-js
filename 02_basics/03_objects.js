//object literals
const mySym = Symbol("Key 1")
const JsUser = {
    name : "Gautam",
    age : "20",
    "full name" : "Gautam Rana",
    email : "gautam@google.com",
    isLoggedIn : false,
    [mySym] : "My Symbol 1"
}
// console.log(JsUser.email)
// console.log(JsUser['email']) 
/*mostly we now use this as of this following example
if we want to access the full name key's value then how do it using dot operator as it isnt
possible so we used square brackets type finally......*/
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])//without square brackets we get the typeof mySym as string but with brackets we get mySym as Symmbol...
// console.log(JsUser.email)
// JsUser.email = "gautam@chatgpt.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
// JsUser.email = "gautam@microsoft.com" // value will not change as we used freez method
// console.log(JsUser.email)
JsUser.greeting = function(){
    console.log("Hello we are learning js from scratch")
}

JsUser.greetingTwo = function(){
    console.log(`Hello I, ${this.name} learning js from scratch `)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())