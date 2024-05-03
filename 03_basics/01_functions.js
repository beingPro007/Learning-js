// function sayMyName(){
//     console.log("G");
//     console.log("A");
//     console.log("U");
//     console.log("T");
//     console.log("A");
//     console.log("M");
// }
// sayMyName()
// function add(a , b) {
//     return a+b
// }
// const result = add(2,3)
// // console.log("Result : " , result);
// function loginUserMessage(username) {
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username}, just logged in`
// }
// console.log(loginUserMessage("Gautam"))
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500))
const user = {
    username : "hitesh",
    price : "199"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject({
    username : "Gautam",
    price : "150"
})
const myNewArray = [200,400,500,600]
function secondValue(getArray){
    return getArray[0]
}
console.log(secondValue(myNewArray));


